"use client";

import { useEffect, useMemo, useState } from "react";
import { Flag } from "@/components/Flag";
import { CONTINENTS } from "@/data/continents";
import {
  PERIOD_FILTERS,
  countryMeta,
  gvizUrl,
  parseGvizListings,
  uniqueCountries,
  type ListingItem,
  type ListingKind,
  type PeriodFilterId,
} from "@/lib/sheet-listings";

type Props = {
  kind: ListingKind;
  initialItems: ListingItem[];
};

export function PartnerDirectory({ kind, initialItems }: Props) {
  const [items, setItems] = useState(initialItems);
  const [country, setCountry] = useState<string | "all">("all");
  const [period, setPeriod] = useState<PeriodFilterId>("all");

  useEffect(() => {
    const handler = `keptyListings_${kind}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    (window as Window & Record<string, unknown>)[handler] = (payload: unknown) => {
      try {
        const next = parseGvizListings(payload as { table?: { rows?: { c?: ({ v?: unknown } | null)[] }[] } }, kind);
        if (next.length) setItems(next);
      } catch {
        // Keep the last synced snapshot.
      } finally {
        delete (window as Window & Record<string, unknown>)[handler];
      }
    };
    script.src = gvizUrl(kind, handler);
    script.async = true;
    script.onerror = () => {
      delete (window as Window & Record<string, unknown>)[handler];
    };
    document.body.appendChild(script);
    return () => {
      script.remove();
      delete (window as Window & Record<string, unknown>)[handler];
    };
  }, [kind]);

  const countries = useMemo(() => uniqueCountries(items), [items]);
  const countriesByContinent = CONTINENTS.map((continent) => ({
    ...continent,
    countries: countries.filter((id) => countryMeta(id).continent === continent.id),
  })).filter((group) => group.countries.length > 0);
  const globalCountries = countries.filter((id) => !countryMeta(id).continent);

  const list = items.filter((item) => {
    if (country !== "all" && item.country !== country) return false;
    if (kind === "junior" && period !== "all") {
      const match = PERIOD_FILTERS.find((item) => item.id === period)?.match ?? "";
      if (!item.period?.includes(match)) return false;
    }
    return true;
  });

  return (
    <div>
      <div className="mb-10 space-y-8">
        {kind === "junior" ? (
          <fieldset>
            <legend className="kicker mb-3">Period</legend>
            <div className="flex flex-wrap gap-2">
              {PERIOD_FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPeriod(item.id)}
                  className={`border px-3 py-1.5 ${
                    item.id === "all"
                      ? "font-latin text-[0.65rem] uppercase tracking-[0.16em]"
                      : "font-mincho text-[0.82rem] tracking-[0.08em]"
                  } ${period === item.id ? "border-gold text-gold" : "border-gold/20 text-mute"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        <div className="space-y-6">
          {globalCountries.length > 0 ? (
            <div>
              <p className="kicker mb-3">Coverage</p>
              <div className="flex flex-wrap gap-2">
                {globalCountries.map((id) => (
                  <CountryChip
                    key={id}
                    id={id}
                    active={country === id}
                    onSelect={() => setCountry(id)}
                  />
                ))}
              </div>
            </div>
          ) : null}
          {countriesByContinent.map((group) => (
            <div key={group.id}>
              <p className="kicker mb-3">
                {group.label}
                <span className="ml-3 font-mincho tracking-normal text-mute/80">{group.labelJa}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {group.countries.map((id) => (
                  <CountryChip
                    key={id}
                    id={id}
                    active={country === id}
                    onSelect={() => setCountry(id)}
                  />
                ))}
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

      {list.length === 0 ? (
        <p className="text-mute">この条件の掲載先はありません。All に戻すか、別の条件を選んでください。</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((item) => {
            const meta = countryMeta(item.country);
            return (
              <article key={`${item.name}-${item.country}`} className="panel p-6">
                <div className="flex items-center gap-2.5">
                  {meta.flag ? <Flag code={meta.flag} name={meta.label} /> : null}
                  <p className="font-mincho text-[0.78rem] tracking-[0.06em] text-mute">{meta.label}</p>
                </div>
                <h3 className="mt-4 font-display text-2xl italic leading-snug">{item.name}</h3>
                {item.period ? (
                  <p className="mt-3 font-mincho text-[0.78rem] tracking-[0.06em] text-gold">{item.period}</p>
                ) : null}
                {item.feature ? <p className="mt-3 text-sm leading-relaxed text-mute">{item.feature}</p> : null}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CountryChip({
  id,
  active,
  onSelect,
}: {
  id: string;
  active: boolean;
  onSelect: () => void;
}) {
  const meta = countryMeta(id);
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex items-center gap-2 border px-3 py-2 ${
        active ? "border-gold bg-gold/10 text-gold" : "border-gold/20 text-mute"
      }`}
    >
      {meta.flag ? <Flag code={meta.flag} name={meta.label} /> : null}
      <span className="font-mincho text-[0.82rem] tracking-[0.06em]">{meta.label}</span>
    </button>
  );
}
