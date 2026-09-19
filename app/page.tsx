import Link from "next/link";
import { ConsultForm } from "@/components/ConsultForm";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/assets/coach-play-03.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_62%] opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="relative mx-auto flex min-h-screen max-w-page flex-col justify-end px-5 pb-24 pt-32 md:px-10">
          <p className="kicker mb-6">Kepty Global Gateway</p>
          <h1 className="font-mincho text-[clamp(1.7rem,4.6vw,3.75rem)] leading-[1.35]">
            世界へ挑む、
            <br />
            <span className="whitespace-nowrap">すべてのフットボーラーへ。</span>
          </h1>
          <p className="mt-6 max-w-xl text-mute">
            本気で海外を目指す選手のための、リアルな情報データベースと実践的英語指導。
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-4">Choose your gate</p>
          <h2 className="mb-12 font-mincho text-3xl md:text-4xl">二つの扉。</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/pro/"
              className="group panel relative min-h-[280px] overflow-hidden p-8 transition hover:border-gold"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="kicker">18–22</p>
              <h3 className="mt-4 font-display text-3xl italic">For Pro & Young Adults</h3>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                世界のリーグ構造・移籍期間・現地代理人ネットワーク。プロとして世界に挑むための完全データベース。
              </p>
              <p className="mt-8 font-latin text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                Enter Pro →
              </p>
            </Link>
            <Link
              href="/junior/"
              className="group panel relative min-h-[280px] overflow-hidden p-8 transition hover:border-gold"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="kicker">Elementary —</p>
              <h3 className="mt-4 font-display text-3xl italic">For Next Generation</h3>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                短期集中遠征×渡航前サッカー英語。本物の環境で成長する、次世代のためのグローバルプログラム。
              </p>
              <p className="mt-8 font-latin text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                Enter Junior →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-navy/40 px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-page gap-12 md:grid-cols-2">
          <div>
            <p className="kicker mb-4">Not tourism</p>
            <h2 className="font-mincho text-3xl leading-snug">
              ただの旅行手配ではない。ピッチで指示が出せる『型』の英語指導。
            </h2>
          </div>
          <div>
            <p className="kicker mb-4">Direct network</p>
            <h2 className="font-mincho text-3xl leading-snug">
              現地エージェント直結の、圧倒的ネットワーク。
            </h2>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-4">Presents</p>
          <h2 className="font-mincho text-3xl md:text-4xl">
            次世代グローバルサッカー挑戦ドキュメンタリー
          </h2>
          <p className="mt-4 max-w-2xl text-mute">
            挑戦する若者の記録を、映像として残す冠プロジェクト枠。富裕層ファミリーと、本気の選手の現場に並走する企業へ。
          </p>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["Presenting Partner", "Documentary Partner", "Kit Partner", "Education Partner"].map(
              (slot) => (
                <div
                  key={slot}
                  className="flex h-24 items-center justify-center border border-dashed border-gold/30 font-latin text-[0.62rem] uppercase tracking-[0.18em] text-mute/70"
                >
                  {slot}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <ConsultForm
        title="挑戦の地図を、静かに引きます。"
        lede="PRO / JUNIOR いずれでも。まずは非公開の相談から。"
        context="Gateway"
      />
    </main>
  );
}
