import { FOUNDER } from "@/data/founder";

export function FounderProfile() {
  return (
    <div className="mx-auto grid max-w-page gap-8 md:grid-cols-[180px_1fr] md:items-start">
      <img
        src={FOUNDER.photo}
        alt={`${FOUNDER.nameEn}, ${FOUNDER.roleEn} of ${FOUNDER.company}`}
        className="mx-auto w-40 object-contain md:mx-0 md:w-full"
      />
      <div>
        <p className="kicker">{`${FOUNDER.roleEn}, ${FOUNDER.company}`}</p>
        <h2 className="mt-2 font-display text-3xl italic leading-tight text-ivory md:text-4xl">
          {FOUNDER.nameEn}
        </h2>
        <p className="mt-1 text-mute">{FOUNDER.nameJa}</p>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-[1.95] text-mute md:text-base">
          {FOUNDER.paragraphs.map((paragraph) => (
            <p key={paragraph} className="break-keep">
              {paragraph}
            </p>
          ))}
        </div>
        <a
          href={FOUNDER.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-latin text-[0.65rem] uppercase tracking-[0.18em] text-gold hover:text-gold-bright"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
