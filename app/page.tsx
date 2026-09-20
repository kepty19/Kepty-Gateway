import Link from "next/link";
import { ConsultForm } from "@/components/ConsultForm";
import { PartnerTiers } from "@/components/PartnerTiers";
import { OriginValue } from "@/components/OriginValue";
import { Faq } from "@/components/Faq";

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
          <p className="mb-7 font-latin text-lg font-medium uppercase tracking-[0.28em] text-gold md:text-2xl md:tracking-[0.34em]">
            Kepty Global Gateway
          </p>
          <h1 className="font-mincho text-[clamp(1.7rem,4.6vw,3.75rem)] leading-[1.35]">
            世界へ挑む、
            <br />
            <span className="whitespace-nowrap">すべてのフットボーラーへ。</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-mute md:text-lg">
            海外でプレーするために必要な情報と、
            <br className="hidden sm:block" />
            現地につながる相談窓口を、一箇所に。
          </p>
        </div>
      </section>

      <OriginValue />

      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-4">Choose your gate</p>
          <h2 className="font-mincho text-3xl md:text-4xl">二つの扉</h2>
          <p className="mb-12 mt-4 max-w-2xl text-sm leading-relaxed text-mute md:text-base">
            プロ・大人世代と、ユース・アカデミー世代。目的に合うページをお選びください。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/pro/"
              className="group panel relative min-h-[280px] overflow-hidden p-8 transition hover:border-gold"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="font-mincho text-3xl leading-snug md:text-[2.1rem]">プロ・大人世代</h3>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                プロ契約からアマチュア契約まで。海外に挑む選手に有益となる情報がここに。
              </p>
              <p className="mt-8 font-mincho text-[0.85rem] tracking-[0.08em] text-gold">
                プロ・大人世代のページへ →
              </p>
            </Link>
            <Link
              href="/junior/"
              className="group panel relative min-h-[280px] overflow-hidden p-8 transition hover:border-gold"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="font-mincho text-3xl leading-snug md:text-[2.1rem]">
                ユース・アカデミー世代
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                短期のサッカーイベントから長期のサッカー留学まで。海外に挑む若者に有益となる情報がここに。
              </p>
              <p className="mt-8 font-mincho text-[0.85rem] tracking-[0.08em] text-gold">
                ユース・アカデミー世代のページへ →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-4">Partners</p>
          <h2 className="font-mincho text-3xl leading-snug md:text-4xl">パートナーシップ企業様</h2>
          <p className="mt-4 max-w-2xl text-sm text-mute md:text-base">
            サッカーを通して挑戦する若者達と、共に歩むパートナーシップ企業様です。
          </p>
          <PartnerTiers />
        </div>
      </section>

      <ConsultForm
        title="質問・相談"
        lede="海外挑戦について、お気軽にご相談ください。プロ・大人世代、ユース・アカデミー世代、共に、まずは非公開の個別相談から可能です。"
        context="Gateway"
      />
      <Faq />
    </main>
  );
}
