import type { Metadata } from "next";
import { JuniorPartners } from "@/components/JuniorPartners";
import { ConsultForm } from "@/components/ConsultForm";
import { ListingDisclaimer } from "@/components/ListingDisclaimer";

export const metadata: Metadata = {
  title: "ユース・アカデミー世代",
  description: "海外留学・イベントに関連する企業、クラブの情報。",
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
        <div className="relative mx-auto min-w-0 max-w-page">
          <p className="kicker mb-4">Youth & Academy</p>
          <h1 className="max-w-3xl font-mincho text-4xl leading-tight md:text-5xl">
            若いうちから、世界を体験する。
          </h1>
          <p className="mt-6 max-w-2xl text-mute">
            海外留学・イベントに関連する企業、クラブの情報を掲載しています。
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto min-w-0 max-w-page">
          <JuniorPartners />
          <ListingDisclaimer />
        </div>
      </section>

      <ConsultForm
        title="質問・相談"
        lede="まずは個別相談から可能です。お気軽にご相談ください。"
        context="Junior"
      />
    </main>
  );
}
