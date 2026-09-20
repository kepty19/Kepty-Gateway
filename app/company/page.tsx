import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FOUNDER } from "@/data/founder";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "会社情報",
  description: "Kepty Co., Ltd. 代表 梶山 知裕。",
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

export default function CompanyPage() {
  return (
    <main className="pt-24">
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-page">
          <h1 className="font-mincho text-4xl leading-tight md:text-5xl">会社情報</h1>
          <h2 className="mt-14 font-mincho text-2xl md:text-3xl">概要</h2>

          <dl className="mt-4 max-w-3xl border-b border-gold/20">
            <Fact label="商号">
              <p className="font-latin tracking-[0.04em]">{SITE.company}</p>
            </Fact>
            <Fact label="サービス">
              <p>{SITE.name}</p>
            </Fact>
            <Fact label="代表">
              <p className="text-xl md:text-2xl">{FOUNDER.nameJa}</p>
              <div className="mt-5 space-y-4 text-sm leading-[1.95] text-mute md:text-base">
                {FOUNDER.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="break-keep">
                    {paragraph}
                  </p>
                ))}
              </div>
              <aside className="mt-8 border border-gold/25 border-l-2 border-l-gold bg-navy/30 p-5">
                <p className="font-mincho text-[0.78rem] tracking-[0.14em] text-gold">
                  {FOUNDER.otherKicker}
                </p>
                <h3 className="mt-2 font-mincho text-lg leading-snug text-ivory md:text-xl">
                  {FOUNDER.otherTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute md:text-[0.95rem]">
                  {FOUNDER.otherBody}
                </p>
                <a
                  href={FOUNDER.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex max-w-full items-center gap-2 break-all text-sm text-gold hover:text-gold-bright"
                >
                  {FOUNDER.instagramLabel}
                </a>
              </aside>
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
