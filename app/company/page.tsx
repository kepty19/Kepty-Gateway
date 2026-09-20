import type { Metadata } from "next";
import { FounderProfile } from "@/components/FounderProfile";
import { FOUNDER } from "@/data/founder";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "会社情報",
  description: "Kepty Co., Ltd. 代表 梶山 知裕。A proven elite coach.",
};

export default function CompanyPage() {
  return (
    <main className="pt-24">
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-4">The coach</p>
          <h1 className="max-w-3xl font-mincho text-4xl leading-tight md:text-5xl">会社情報</h1>
          <p className="mt-5 max-w-2xl font-display text-2xl italic leading-snug text-ivory md:text-[2.1rem]">
            A proven elite coach.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute md:text-base">{FOUNDER.lede}</p>
          <div className="mt-12">
            <FounderProfile />
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-4">Company</p>
          <h2 className="font-mincho text-2xl md:text-3xl">概要</h2>
          <dl className="mt-10 grid max-w-xl gap-6 text-sm">
            <div>
              <dt className="text-mute">商号</dt>
              <dd className="mt-1 font-latin tracking-[0.04em]">{SITE.company}</dd>
            </div>
            <div>
              <dt className="text-mute">サービス</dt>
              <dd className="mt-1">{SITE.name}</dd>
            </div>
            <div>
              <dt className="text-mute">代表</dt>
              <dd className="mt-1">{FOUNDER.nameJa}</dd>
            </div>
            <div>
              <dt className="text-mute">Email</dt>
              <dd className="mt-1">
                <a className="font-latin text-gold" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
