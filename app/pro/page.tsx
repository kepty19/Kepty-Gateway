import type { Metadata } from "next";
import { LeagueExplorer } from "@/components/LeagueExplorer";
import { ConsultForm } from "@/components/ConsultForm";
import { ListingDisclaimer } from "@/components/ListingDisclaimer";
import { AGENT_DESKS } from "@/data/agents";

export const metadata: Metadata = {
  title: "プロ・大人世代",
  description: "海外移籍に関連する企業、代理人、クラブの情報。",
};

export default function ProPage() {
  return (
    <main className="pt-24">
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto min-w-0 max-w-page">
          <p className="kicker mb-4">Professional & Academy</p>
          <h1 className="max-w-3xl font-mincho text-4xl leading-tight md:text-5xl">
            海外移籍は、今ここから。
          </h1>
          <p className="mt-6 max-w-2xl text-mute">
            海外移籍に関連する企業、代理人、クラブの情報を掲載しています。
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10">
        <div className="mx-auto min-w-0 max-w-page">
          <LeagueExplorer />
        </div>
      </section>

      <section className="border-t border-gold/20 px-5 py-20 md:px-10">
        <div className="mx-auto min-w-0 max-w-page">
          <div className="grid gap-4 md:grid-cols-2">
            {AGENT_DESKS.map((desk) => (
              <article key={desk.region} className="panel p-6">
                <p className="kicker">{desk.region}</p>
                <h3 className="mt-2 font-display text-2xl italic">{desk.title}</h3>
                <p className="mt-3 text-sm text-gold">{desk.focus}</p>
                <p className="mt-3 text-sm text-mute">{desk.strength}</p>
                <p className="mt-4 text-xs text-mute/80">{desk.note}</p>
              </article>
            ))}
          </div>
          <ListingDisclaimer />
        </div>
      </section>

      <ConsultForm
        title="質問・相談"
        lede="まずは個別相談から可能です。お気軽にご相談ください。"
        context="Pro"
      />
    </main>
  );
}
