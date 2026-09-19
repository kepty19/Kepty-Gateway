"use client";

import { useMemo, useState } from "react";
import {
  COUNTRY_LABEL,
  PROGRAMMES,
  SEASON_LABEL,
  type Country,
  type Season,
} from "@/data/programmes";

export function ProgrammeBoard() {
  const [season, setSeason] = useState<Season | "all">("all");
  const [country, setCountry] = useState<Country | "all">("all");

  const list = useMemo(
    () =>
      PROGRAMMES.filter((item) => (season === "all" ? true : item.season === season)).filter(
        (item) => (country === "all" ? true : item.country === country)
      ),
    [season, country]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-6">
        <fieldset className="flex flex-wrap gap-2">
          <legend className="kicker mb-2 w-full">Season</legend>
          {(["all", "spring", "summer", "winter"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setSeason(value)}
              className={`font-latin text-[0.65rem] uppercase tracking-[0.16em] px-3 py-1.5 border ${
                season === value ? "border-gold text-gold" : "border-gold/20 text-mute"
              }`}
            >
              {value === "all" ? "All" : SEASON_LABEL[value]}
            </button>
          ))}
        </fieldset>
        <fieldset className="flex flex-wrap gap-2">
          <legend className="kicker mb-2 w-full">Country</legend>
          {(["all", "spain", "england", "germany"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setCountry(value)}
              className={`font-latin text-[0.65rem] uppercase tracking-[0.16em] px-3 py-1.5 border ${
                country === value ? "border-gold text-gold" : "border-gold/20 text-mute"
              }`}
            >
              {value === "all" ? "All" : COUNTRY_LABEL[value]}
            </button>
          ))}
        </fieldset>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((item) => (
          <article key={item.id} className="panel p-6">
            <div className="flex items-start justify-between gap-3">
              <p className="kicker">
                {SEASON_LABEL[item.season]} · {COUNTRY_LABEL[item.country]}
              </p>
              {item.english ? (
                <span className="font-latin text-[0.58rem] uppercase tracking-[0.16em] text-gold">
                  Kepty English
                </span>
              ) : null}
            </div>
            <h3 className="mt-3 font-display text-2xl italic">{item.name}</h3>
            <p className="mt-1 text-sm text-mute">
              {item.days}日間 · {item.ages}
            </p>
            <p className="mt-4 text-sm">{item.school}</p>
            <p className="mt-2 text-sm text-mute">{item.focus}</p>
            <p className="mt-6 font-latin text-gold">{item.fee}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
