import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FOUNDER } from "@/data/founder";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "会社情報",
  description: "株式会社Kepty 代表 梶山 知裕。",
};

function Fact({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-3 border-t border-gold/20 py-8 first:border-t-0 md:grid-cols-[9.5rem_1fr] md:gap-10">
      <dt className="font-mincho text-[0.92rem] tracking-[0.08em] text-gold">{label}</dt>
      <dd className="min-w-0 text-ivory">{children}</dd>
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 7.92A3.12 3.12 0 1 1 15.12 12 3.12 3.12 0 0 1 12 15.12Z" />
      <path d="M17.04 2.16H6.96A4.8 4.8 0 0 0 2.16 6.96v10.08a4.8 4.8 0 0 0 4.8 4.8h10.08a4.8 4.8 0 0 0 4.8-4.8V6.96a4.8 4.8 0 0 0-4.8-4.8Zm3.12 14.88a3.12 3.12 0 0 1-3.12 3.12H6.96a3.12 3.12 0 0 1-3.12-3.12V6.96A3.12 3.12 0 0 1 6.96 3.84h10.08a3.12 3.12 0 0 1 3.12 3.12Z" />
      <circle cx="17.52" cy="6.48" r="1.14" />
    </svg>
  );
}

export default function CompanyPage() {
  return (
    <main className="pt-24">
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-page">
          <h1 className="font-mincho text-4xl leading-tight md:text-5xl">会社情報</h1>
          <h2 className="mt-14 font-mincho text-2xl md:text-3xl">概要</h2>

          <dl className="mt-4 max-w-3xl border-b border-gold/20">
            <Fact label="商号">
              <p>{SITE.company}</p>
            </Fact>
            <Fact label="サービス">
              <p>{SITE.name}</p>
            </Fact>
            <Fact label="代表">
              <p className="text-xl md:text-2xl">{FOUNDER.nameJa}</p>
              <div className="mt-5 space-y-4 text-sm leading-[1.95] text-mute md:text-base">
                {FOUNDER.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-[1.95]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                href={FOUNDER.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex max-w-full items-start gap-2.5 text-sm leading-snug text-gold hover:text-gold-bright"
              >
                <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{FOUNDER.instagramLabel}</span>
              </a>
            </Fact>
            <Fact label="Email">
              <p className="font-latin tracking-[0.02em] text-ivory">{SITE.email}</p>
            </Fact>
          </dl>
        </div>
      </section>
    </main>
  );
}
