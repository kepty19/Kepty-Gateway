import type { Partner } from "@/data/partners";
import { GOLD_PARTNERS, PLATINUM_PARTNERS, SILVER_PARTNERS } from "@/data/partners";

type Tier = "platinum" | "gold" | "silver";

function Slot({ partner, tier }: { partner: Partner; tier: Tier }) {
  const box =
    tier === "platinum"
      ? "h-36 w-64 max-w-full sm:h-40 sm:w-80 lg:w-[36rem] border-gold"
      : tier === "gold"
        ? "h-24 w-52 max-w-full sm:w-64 border-gold/45"
        : "h-20 w-44 max-w-full sm:w-56 border-gold/25";

  return (
    <div
      className={`flex max-w-full shrink-0 items-center justify-center border border-dashed bg-ink/40 px-4 sm:px-6 ${box}`}
    >
      {partner.logo ? (
        <img src={partner.logo} alt={partner.name} className="max-h-[58%] max-w-[72%] object-contain" />
      ) : (
        <span className="font-latin text-[0.62rem] uppercase tracking-[0.2em] text-mute/80">
          {partner.name}
        </span>
      )}
    </div>
  );
}

function SlotGroup({
  partners,
  tier,
  hidden,
}: {
  partners: Partner[];
  tier: Tier;
  hidden?: boolean;
}) {
  return (
    <div className="flex items-center gap-4" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <Slot key={`${hidden ? "dup" : "src"}-${partner.id}`} partner={partner} tier={tier} />
      ))}
    </div>
  );
}

function TierRow({
  label,
  partners,
  tier,
}: {
  label: string;
  partners: Partner[];
  tier: Tier;
}) {
  const marquee = partners.length > 1;

  return (
    <div>
      <p className="kicker mb-4">{label}</p>
      {marquee ? (
        <div className="max-w-full overflow-hidden">
          <div className="partner-track flex w-max max-w-none items-center gap-4">
            <SlotGroup partners={partners} tier={tier} />
            <SlotGroup partners={partners} tier={tier} hidden />
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-full justify-center">
          <SlotGroup partners={partners} tier={tier} />
        </div>
      )}
    </div>
  );
}

export function PartnerTiers() {
  return (
    <div className="mt-14 space-y-12">
      <TierRow label="Platinum Partner" partners={PLATINUM_PARTNERS} tier="platinum" />
      <TierRow label="Gold Partners" partners={GOLD_PARTNERS} tier="gold" />
      <TierRow label="Silver Partners" partners={SILVER_PARTNERS} tier="silver" />
    </div>
  );
}
