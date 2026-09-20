"use client";

import { useMemo, useState } from "react";
import { Flag } from "@/components/Flag";
import { CONTINENTS } from "@/data/continents";
import { LEAGUES } from "@/data/leagues";

export function LeagueExplorer() {
  const [id, setId] = useState(LEAGUES[0].id);
  const [categoryId, setCategoryId] = useState(LEAGUES[0].categories[0].id);
  const country = LEAGUES.find((item) => item.id === id) ?? LEAGUES[0];
  const category =
    country.categories.find((item) => item.id === categoryId) ?? country.categories[0];

  const grouped = useMemo(
    () =>
      CONTINENTS.map((continent) => ({
        ...continent,
        countries: LEAGUES.filter((item) => item.continent === continent.id),
      })).filter((group) => group.countries.length > 0),
    []
  );

  const selectCountry = (nextId: string) => {
    const next = LEAGUES.find((item) => item.id === nextId) ?? LEAGUES[0];
    setId(next.id);
    setCategoryId(next.categories[0].id);
  };

  return (
    <div>
      <div className="space-y-8">
        {grouped.map((group) => (
          <div key={group.id}>
            <p className="kicker mb-3">
              {group.label}
              <span className="ml-3 font-mincho tracking-normal text-mute/80">{group.labelJa}</span>
            </p>
            <div className="flex min-w-0 flex-wrap gap-2">
              {group.countries.map((item) => {
                const active = item.id === id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectCountry(item.id)}
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

      <article className="mt-12 min-w-0">
        <div className="mb-8 flex items-center gap-5">
          <Flag code={country.flag} name={country.name} size="lg" />
          <div>
            <p className="kicker">{country.nameEn}</p>
            <h3 className="mt-1 font-mincho text-3xl">{country.name}</h3>
          </div>
        </div>

        <p className="mb-3 font-mincho text-[0.8rem] tracking-[0.12em] text-gold">カテゴリー</p>
        <div className="flex min-w-0 flex-wrap gap-2">
          {country.categories.map((item) => {
            const active = item.id === category.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategoryId(item.id)}
                className={`border px-3 py-2 font-mincho text-[0.82rem] tracking-[0.04em] transition ${
                  active
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-gold/20 text-mute hover:border-gold/60"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="panel p-5">
            <p className="mb-2 font-mincho text-[0.8rem] tracking-[0.12em] text-gold">リーグの時期</p>
            <p>{category.leaguePeriod}</p>
          </div>
          <div className="panel p-5">
            <p className="mb-2 font-mincho text-[0.8rem] tracking-[0.12em] text-gold">移籍期間</p>
            <p className="text-sm">夏 {category.summerWindow}</p>
            <p className="mt-1 text-sm">冬 {category.winterWindow}</p>
          </div>
          <div className="panel p-5">
            <p className="mb-2 font-mincho text-[0.8rem] tracking-[0.12em] text-gold">外国人枠</p>
            <p>{category.foreignCap}</p>
            {category.asianQuota ? (
              <p className="mt-3 border-t border-gold/20 pt-3 text-sm text-gold">{category.asianQuota}</p>
            ) : (
              <p className="mt-3 text-sm text-mute/70">アジア専用枠なし</p>
            )}
          </div>
          <div className="panel p-5">
            <p className="mb-2 font-mincho text-[0.8rem] tracking-[0.12em] text-gold">ビザ</p>
            <p className="text-sm leading-relaxed text-mute">{category.visa}</p>
          </div>
        </div>

        <div className="panel mt-4 flex flex-col gap-3 p-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mincho text-[0.8rem] tracking-[0.12em] text-gold">プレーしている日本人</p>
            <p className="font-mincho text-4xl text-gold">{category.japanesePlayers}</p>
          </div>
          <p className="max-w-md text-sm text-mute">{category.japaneseNote}</p>
        </div>
      </article>

      <p className="mt-8 text-xs leading-relaxed text-mute/70">
        各国連盟・リーグ公式、Transfermarktの公開ロスター、Wikipedia、現地報道を突合した概要です。人数・規則は年度で改定されます。最終判断は個別相談にてご確認ください。
      </p>
    </div>
  );
}
