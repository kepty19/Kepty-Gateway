"use client";

import { useMemo, useState } from "react";
import { Flag } from "@/components/Flag";
import { CONTINENTS } from "@/data/continents";
import { LEAGUES } from "@/data/leagues";

export function LeagueExplorer() {
  const [id, setId] = useState(LEAGUES[0].id);
  const league = LEAGUES.find((item) => item.id === id) ?? LEAGUES[0];

  const grouped = useMemo(
    () =>
      CONTINENTS.map((continent) => ({
        ...continent,
        countries: LEAGUES.filter((item) => item.continent === continent.id),
      })).filter((group) => group.countries.length > 0),
    []
  );

  return (
    <div>
      <div className="space-y-8">
        {grouped.map((group) => (
          <div key={group.id}>
            <p className="kicker mb-3">
              {group.label}
              <span className="ml-3 font-sans tracking-normal text-mute/80">{group.labelJa}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {group.countries.map((item) => {
                const active = item.id === id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setId(item.id)}
                    className={`flex items-center gap-2.5 border px-3 py-2 transition ${
                      active
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-gold/20 text-mute hover:border-gold/60"
                    }`}
                  >
                    <Flag code={item.flag} name={item.name} />
                    <span className="font-latin text-[0.68rem] uppercase tracking-[0.16em]">
                      {item.nameEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <article className="mt-12">
        <div className="mb-10 flex items-center gap-5">
          <Flag code={league.flag} name={league.name} size="lg" />
          <div>
            <p className="kicker">{league.nameEn}</p>
            <h3 className="mt-1 font-mincho text-3xl">{league.name}</h3>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-5">
            <p className="kicker mb-2">リーグの時期</p>
            <p>{league.leaguePeriod}</p>
          </div>
          <div className="panel p-5">
            <p className="kicker mb-2">移籍期間</p>
            <p className="text-sm">夏 {league.summerWindow}</p>
            <p className="mt-1 text-sm">冬 {league.winterWindow}</p>
          </div>
          <div className="panel p-5">
            <p className="kicker mb-2">外国人枠</p>
            <p>{league.foreignCap}</p>
            {league.asianQuota ? (
              <p className="mt-3 border-t border-gold/20 pt-3 text-sm text-gold">{league.asianQuota}</p>
            ) : (
              <p className="mt-3 text-sm text-mute/70">アジア専用枠なし</p>
            )}
          </div>
          <div className="panel p-5">
            <p className="kicker mb-2">ビザ</p>
            <p className="text-sm leading-relaxed text-mute">{league.visa}</p>
          </div>
        </div>

        <div className="panel mt-4 flex flex-col gap-3 p-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-2">プレーしている日本人</p>
            <p className="font-mincho text-4xl text-gold">{league.japanesePlayers}</p>
          </div>
          <p className="max-w-md text-sm text-mute">{league.japaneseNote}</p>
        </div>

        <ol className="mt-8 space-y-2 text-sm text-mute">
          {league.structure.map((row) => (
            <li key={row} className="border-l border-gold/40 pl-4">
              {row}
            </li>
          ))}
        </ol>
      </article>

      <p className="mt-8 text-xs tracking-wide text-mute/70">
        人数は公開ロスターの概数です。移籍規則・外国人枠・ビザは年度で改定されます。最終判断は個別相談にてご確認ください。
      </p>
    </div>
  );
}
