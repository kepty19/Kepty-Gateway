import type { ContinentId } from "@/data/continents";
import { CONTINENTS } from "@/data/continents";

export const LISTINGS_SHEET = {
  id: "1Yct4te5NS4dQu3JJlHDgOwPb0ZSmGd6AXQpoev5fV5U",
  pro: { name: "プロ・大人", gid: "0" },
  junior: { name: "ユース・アカデミー", gid: "2113413378" },
} as const;

export type ListingKind = "pro" | "junior";

export type ListingItem = {
  name: string;
  country: string;
  period?: string;
  feature: string;
};

export type ListingsFile = {
  pro: ListingItem[];
  junior: ListingItem[];
};

type CountryMeta = {
  label: string;
  flag?: string;
  continent?: ContinentId;
};

const COUNTRY_META: Record<string, CountryMeta> = {
  All: { label: "複数国" },
  ALL: { label: "複数国" },
  複数国: { label: "複数国" },
  スペイン: { label: "スペイン", flag: "es", continent: "europe" },
  Spain: { label: "スペイン", flag: "es", continent: "europe" },
  イングランド: { label: "イングランド", flag: "gb-eng", continent: "europe" },
  England: { label: "イングランド", flag: "gb-eng", continent: "europe" },
  イギリス: { label: "イングランド", flag: "gb-eng", continent: "europe" },
  UK: { label: "イングランド", flag: "gb-eng", continent: "europe" },
  ドイツ: { label: "ドイツ", flag: "de", continent: "europe" },
  Germany: { label: "ドイツ", flag: "de", continent: "europe" },
  タイ: { label: "タイ", flag: "th", continent: "asia" },
  Thailand: { label: "タイ", flag: "th", continent: "asia" },
  マレーシア: { label: "マレーシア", flag: "my", continent: "asia" },
  Malaysia: { label: "マレーシア", flag: "my", continent: "asia" },
  オーストラリア: { label: "オーストラリア", flag: "au", continent: "oceania" },
  Australia: { label: "オーストラリア", flag: "au", continent: "oceania" },
};

const HEADER_NAME = "企業名（クラブ・代理人名）";

export function countryMeta(country: string): CountryMeta {
  const key = country.trim();
  return COUNTRY_META[key] ?? { label: key || "—" };
}

export function gvizUrl(kind: ListingKind, handler?: string): string {
  const sheet = encodeURIComponent(LISTINGS_SHEET[kind].name);
  const tqx = handler ? `responseHandler:${handler};out:json` : "out:json";
  return `https://docs.google.com/spreadsheets/d/${LISTINGS_SHEET.id}/gviz/tq?tqx=${tqx}&sheet=${sheet}&range=A:E`;
}

function cellText(value: unknown): string {
  if (value == null) return "";
  return String(value).trim();
}

export function rowsToListings(rows: string[][], kind: ListingKind): ListingItem[] {
  const items: ListingItem[] = [];
  for (const row of rows) {
    const name = cellText(row[0]);
    if (!name || name === HEADER_NAME) continue;
    const country = cellText(row[1]) || "All";
    const feature = cellText(row[4]);
    const item: ListingItem = { name, country, feature };
    if (kind === "junior") item.period = cellText(row[3]);
    items.push(item);
  }
  return items;
}

type GvizTable = {
  table?: {
    rows?: { c?: ({ v?: unknown } | null)[] }[];
  };
};

export function parseGvizListings(payload: GvizTable, kind: ListingKind): ListingItem[] {
  const rows = (payload.table?.rows ?? []).map((row) =>
    (row.c ?? []).map((cell) => cellText(cell?.v))
  );
  return rowsToListings(rows, kind);
}

export function uniqueCountries(items: ListingItem[]): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const item of items) {
    const key = item.country.trim() || "All";
    if (seen.has(key)) continue;
    seen.add(key);
    ordered.push(key);
  }
  return ordered.sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    const ca = countryMeta(a);
    const cb = countryMeta(b);
    const ai = CONTINENTS.findIndex((item) => item.id === ca.continent);
    const bi = CONTINENTS.findIndex((item) => item.id === cb.continent);
    if (ai !== bi) return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
    return ca.label.localeCompare(cb.label, "ja");
  });
}

export const PERIOD_FILTERS = [
  { id: "all", label: "All", match: "" },
  { id: "short", label: "短期", match: "短期" },
  { id: "long", label: "長期", match: "長期" },
  { id: "year", label: "通年", match: "通年" },
] as const;

export type PeriodFilterId = (typeof PERIOD_FILTERS)[number]["id"];
