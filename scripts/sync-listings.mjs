import { writeFile, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SHEET_ID = "1Yct4te5NS4dQu3JJlHDgOwPb0ZSmGd6AXQpoev5fV5U";
const HEADER_NAME = "企業名（クラブ・代理人名）";
const OUT_JSON = resolve(dirname(fileURLToPath(import.meta.url)), "../data/listings.json");
const OUT_TS = resolve(dirname(fileURLToPath(import.meta.url)), "../data/listings-data.ts");

const TABS = {
  pro: "プロ・大人",
  junior: "ユース・アカデミー",
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch !== "\r") {
      cell += ch;
    }
  }
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function toItems(rows, kind) {
  const items = [];
  for (const row of rows) {
    const name = (row[0] || "").trim();
    if (!name || name === HEADER_NAME) continue;
    const country = (row[1] || "").trim() || "All";
    const feature = (row[4] || "").trim();
    const item = { name, country, feature };
    if (kind === "junior") item.period = (row[3] || "").trim();
    items.push(item);
  }
  return items;
}

async function fetchTab(name) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(name)}&range=A:E`;
  const res = await fetch(url, {
    signal: AbortSignal.timeout(20000),
    headers: { "User-Agent": "KeptyGatewayListings/1.0" },
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const text = await res.text();
  if (text.includes("<!DOCTYPE html") || text.includes("ServiceLogin")) {
    throw new Error(`${name}: spreadsheet is not publicly readable`);
  }
  return parseCsv(text);
}

async function previousFile() {
  try {
    return JSON.parse(await readFile(OUT_JSON, "utf8"));
  } catch {
    return { pro: [], junior: [] };
  }
}

async function main() {
  const previous = await previousFile();
  try {
    const [proRows, juniorRows] = await Promise.all([fetchTab(TABS.pro), fetchTab(TABS.junior)]);
    const next = {
      source: `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`,
      syncedAt: new Date().toISOString(),
      pro: toItems(proRows, "pro"),
      junior: toItems(juniorRows, "junior"),
    };
    if (!next.pro.length && !next.junior.length) {
      throw new Error("sheet returned no listing rows");
    }
    await writeFile(OUT_JSON, `${JSON.stringify(next, null, 2)}\n`);
    await writeFile(
      OUT_TS,
      `import type { ListingItem } from "@/lib/sheet-listings";\n\nexport const PRO_LISTINGS: ListingItem[] = ${JSON.stringify(
        next.pro,
        null,
        2
      )};\n\nexport const JUNIOR_LISTINGS: ListingItem[] = ${JSON.stringify(next.junior, null, 2)};\n`
    );
    console.log(`synced listings: pro=${next.pro.length} junior=${next.junior.length}`);
  } catch (error) {
    if (previous.pro?.length || previous.junior?.length) {
      console.warn(`sheet sync failed, keeping previous listings: ${error.message}`);
      process.exitCode = 0;
      return;
    }
    throw error;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
