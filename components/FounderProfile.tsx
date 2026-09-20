import { FOUNDER } from "@/data/founder";

export function FounderProfile() {
  return (
    <article className="coach-single overflow-hidden">
      <div className="min-w-0">
        <p className="kicker mb-4">{FOUNDER.roleEn}</p>
        <h2 className="font-display text-[clamp(2rem,6vw,3.4rem)] italic leading-tight text-ivory">
          {FOUNDER.nameEn}
        </h2>
        <p className="mt-2 font-mincho text-lg text-mute">{FOUNDER.nameJa}</p>
        <div className="mt-8 space-y-4 text-[0.95rem] leading-[1.85] text-[#d4c7b6] md:text-base">
          {FOUNDER.paragraphs.map((paragraph) => (
            <p key={paragraph} className="break-words">
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="mt-8 border border-gold/25 border-l-2 border-l-gold bg-ink/55 p-4 shadow-[inset_0_1px_0_rgba(208,164,106,0.12)] sm:p-5">
          <p className="font-latin text-[0.62rem] uppercase tracking-[0.22em] text-gold">
            {FOUNDER.otherKicker}
          </p>
          <h3 className="mt-2 font-display text-[1.15rem] font-normal text-ivory">
            {FOUNDER.otherTitle}
          </h3>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-[#d4c7b6]">{FOUNDER.otherBody}</p>
          <a
            href={FOUNDER.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex max-w-full items-center gap-2 break-words border-b border-gold/30 pb-0.5 font-latin text-[0.78rem] tracking-wide text-gold hover:border-gold hover:text-gold-bright"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" aria-hidden>
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
            </svg>
            {FOUNDER.instagramLabel}
          </a>
        </aside>
      </div>
    </article>
  );
}
