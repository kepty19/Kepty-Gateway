"use client";

import { useMemo, useState } from "react";
import { Flag } from "@/components/Flag";
import { CONTINENTS } from "@/data/continents";
import {
  COUNTRY_CONTINENT,
  COUNTRY_FLAG,
  COUNTRY_LABEL,
  JUNIOR_PARTNERS,
  SEASON_LABEL,
  type Country,
  type Season,
} from "@/data/junior-partners";

const SEASON_FILTERS = ["all", "year", "spring", "summer", "autumn", "winter"] as const;
const COUNTRIES: Country[] = ["spain", "england", "germany", "thailand", "malaysia", "australia"];

export function JuniorPartners() {
  const [season, setSeason] = useState<(typeof SEASON_FILTERS)[number]>("all");
  const [country, setCountry] = useState<Country | "all">("all");

  const list = useMemo(
    () =>
      JUNIOR_PARTNERS.filter((item) =>
        season === "all" ? true : item.seasons.includes(season as Season)
      ).filter((item) => (country === "all" ? true : item.country === country)),
    [season, country]
  );

  const grouped = CONTINENTS.map((continent) => ({
    ...continent,
    partners: list.filter((item) => item.continent === continent.id),
  })).filter((group) => group.partners.length > 0);

  const countriesByContinent = CONTINENTS.map((continent) => ({
    ...continent,
    countries: COUNTRIES.filter((id) => COUNTRY_CONTINENT[id] === continent.id),
  }));

  return (
    <div>
      <div className="mb-10 space-y-8">
        <fieldset>
          <legend className="kicker mb-3">Season</legend>
          <div className="flex flex-wrap gap-2">
            {SEASON_FILTERS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setSeason(value)}
                className={`border px-3 py-1.5 ${
                  value === "all"
                    ? "font-latin text-[0.65rem] uppercase tracking-[0.16em]"
                    : "font-mincho text-[0.82rem] tracking-[0.08em]"
                } ${season === value ? "border-gold text-gold" : "border-gold/20 text-mute"}`}
              >
                {value === "all" ? "All" : SEASON_LABEL[value]}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="space-y-6">
          {countriesByContinent.map((group) => (
            <div key={group.id}>
              <p className="kicker mb-3">
                {group.label}
                <span className="ml-3 font-mincho tracking-normal text-mute/80">{group.labelJa}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {group.countries.map((id) => {
                  const active = country === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setCountry(id)}
                      className={`flex items-center gap-2 border px-3 py-2 ${
                        active ? "border-gold bg-gold/10 text-gold" : "border-gold/20 text-mute"
                      }`}
                    >
                      <Flag code={COUNTRY_FLAG[id]} name={COUNTRY_LABEL[id]} />
                      <span className="font-mincho text-[0.82rem] tracking-[0.06em]">
                        {COUNTRY_LABEL[id]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setCountry("all")}
            className={`border px-3 py-1.5 font-latin text-[0.65rem] uppercase tracking-[0.16em] ${
              country === "all" ? "border-gold text-gold" : "border-gold/20 text-mute"
            }`}
          >
            All countries
          </button>
        </div>
      </div>

      {grouped.length === 0 ? (
        <p className="text-mute">この条件の提携先はありません。All に戻すか、別の季節を選んでください。</p>
      ) : (
        <div className="space-y-12">
          {grouped.map((group) => (
            <section key={group.id}>
              <p className="kicker mb-5">
                {group.label}
                <span className="ml-3 font-mincho tracking-normal text-mute/80">{group.labelJa}</span>
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {group.partners.map((item) => (
                  <article key={item.id} className="panel p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <Flag code={item.flag} name={item.name} />
                        <p className="font-mincho text-[0.78rem] tracking-[0.06em] text-mute">
                          {COUNTRY_LABEL[item.country]}
                          <span className="font-latin text-[0.62rem] uppercase tracking-[0.14em] text-mute/80">
                            {" "}
                            · {item.city}
                          </span>
                        </p>
                      </div>
                      <p className="font-mincho text-[0.72rem] tracking-[0.08em] text-gold">
                        {item.kind}
                      </p>
                    </div>
                    <h3 className="mt-4 font-display text-2xl italic leading-snug">{item.name}</h3>
                    <p className="mt-3 text-sm text-mute">{item.summary}</p>
                    <dl className="mt-5 grid gap-2 text-sm">
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 text-mute/70">対象</dt>
                        <dd>{item.ages}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 text-mute/70">時期</dt>
                        <dd>{item.seasons.map((value) => SEASON_LABEL[value]).join(" / ")}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
