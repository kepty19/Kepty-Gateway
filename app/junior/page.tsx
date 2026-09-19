import type { Metadata } from "next";
import { ProgrammeBoard } from "@/components/ProgrammeBoard";
import { ConsultForm } from "@/components/ConsultForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next Generation",
  description: "短期グローバル遠征と、渡航前の Kepty English。",
};

export default function JuniorPage() {
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden px-5 py-20 md:px-10">
        <img
          src="/assets/coach-play-02.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
        <div className="relative mx-auto max-w-page">
          <p className="kicker mb-4">Next Generation</p>
          <h1 className="max-w-3xl font-mincho text-4xl leading-tight md:text-5xl">
            10代で世界の本物を体験する。人生を変える数日間。
          </h1>
          <p className="mt-6 max-w-2xl text-mute">
            1回30万円前後の、数日〜数週間。旅行ではなく、渡航前に英語の『型』を渡してから現地へ出す。
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-3">Programmes</p>
          <h2 className="mb-10 font-mincho text-3xl">シーズン × 国</h2>
          <ProgrammeBoard />
        </div>
      </section>

      <section className="border-y border-gold/20 bg-charcoal/40 px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-page gap-10 md:grid-cols-2">
          <div>
            <p className="kicker mb-4">Kepty English</p>
            <h2 className="font-mincho text-3xl leading-snug">
              パスが来ない。指示が通らない。その挫折を、渡航前に潰す。
            </h2>
          </div>
          <div className="text-mute">
            <p>
              現地のピッチは英語です。観光英語では、自分の位置も、欲しいパスも言えません。Kepty
              English は、指示出しと自己主張のフレーズを、非同期で徹底します。
            </p>
            <p className="mt-6 font-latin text-gold">From ¥20,000 / month · async</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-4">Pipeline</p>
          <h2 className="mb-10 font-mincho text-3xl">プロへの道</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              { n: "01", t: "ジュニア留学", d: "本物の環境を、短く濃く。" },
              { n: "02", t: "事前英語", d: "Kepty English で、ピッチの言葉を持つ。" },
              { n: "03", t: "18歳のデータベース", d: "PROエリアのリーグと代理人へ接続する。" },
            ].map((step) => (
              <li key={step.n} className="panel p-6">
                <p className="kicker">{step.n}</p>
                <h3 className="mt-3 font-mincho text-2xl">{step.t}</h3>
                <p className="mt-2 text-sm text-mute">{step.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <Link href="/pro/" className="font-latin text-[0.72rem] uppercase tracking-[0.2em] text-gold">
              Open the Pro database →
            </Link>
          </p>
        </div>
      </section>

      <ConsultForm
        title="資料請求、または親子Zoom。"
        lede="LINEでの軽微な相談も、送信後にご案内します。まずはこのフォームから。"
        context="Junior"
      />
    </main>
  );
}
