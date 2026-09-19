"use client";

import { useState } from "react";
import { LEAGUES } from "@/data/leagues";

export function LeagueExplorer() {
  const [id, setId] = useState(LEAGUES[0].id);
  const league = LEAGUES.find((item) => item.id === id) ?? LEAGUES[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-gold/20 pb-4">
        {LEAGUES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setId(item.id)}
            className={`font-latin text-[0.68rem] uppercase tracking-[0.18em] px-4 py-2 border transition ${
              item.id === id
                ? "border-gold text-gold bg-gold/10"
                : "border-gold/20 text-mute hover:border-gold/60"
            }`}
          >
            {item.nameEn}
          </button>
        ))}
      </div>
      <article className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <p className="kicker mb-2">{league.nameEn}</p>
          <h3 className="font-mincho text-3xl">{league.name}</h3>
          <ol className="mt-6 space-y-2 text-mute">
            {league.structure.map((row) => (
              <li key={row} className="border-l border-gold/40 pl-4">
                {row}
              </li>
            ))}
          </ol>
        </div>
        <div className="grid gap-4">
          <div className="panel p-5">
            <p className="kicker mb-2">Summer window</p>
            <p>{league.summerWindow}</p>
          </div>
          <div className="panel p-5">
            <p className="kicker mb-2">Winter window</p>
            <p>{league.winterWindow}</p>
          </div>
          <div className="panel p-5">
            <p className="kicker mb-2">Foreign cap / visa</p>
            <p className="text-sm text-mute">{league.foreignCap}</p>
            <p className="mt-2 text-sm text-mute">{league.visa}</p>
          </div>
          <div className="panel p-5">
            <p className="kicker mb-2">日本人選手の市場感</p>
            <p className="text-sm text-mute">{league.japanMarket}</p>
          </div>
        </div>
      </article>
      <p className="mt-8 text-xs tracking-wide text-mute/70">
        移籍規則・外国人枠・ビザは年度で改定されます。最終判断は個別診断で確認します。
      </p>
    </div>
  );
}
