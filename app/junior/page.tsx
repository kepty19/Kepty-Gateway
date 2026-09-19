import type { Metadata } from "next";
import { JuniorPartners } from "@/components/JuniorPartners";
import { ConsultForm } from "@/components/ConsultForm";

export const metadata: Metadata = {
  title: "ユース・アカデミー世代",
  description: "現地の提携クラブ、企業、代理人を掲載しています。",
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
          <p className="kicker mb-4">Youth & Academy</p>
          <h1 className="max-w-3xl font-mincho text-4xl leading-tight md:text-5xl">
            10代で世界の本物を体験する。人生を変える数日間。
          </h1>
          <p className="mt-6 max-w-2xl text-mute">
            旅行商品の一覧ではありません。Keptyが提携する現地のクラブ、企業、代理人のみを掲載しています。
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-page">
          <p className="kicker mb-3">Partners</p>
          <h2 className="mb-10 font-mincho text-3xl">提携先キュレーション</h2>
          <JuniorPartners />
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
