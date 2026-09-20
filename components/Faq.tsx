const FAQS = [
  {
    q: "個別相談に、費用は発生しますか。",
    a: "発生しません。個別相談は、選手・保護者のご負担なくご利用いただけます。挑戦の門戸を費用で狭めないよう、運営費は選手からではなく、挑戦を支える企業からの手数料で賄っています。",
  },
  {
    q: "特定の企業や代理人を、強く推すことはありますか。",
    a: "ありません。海外挑戦では情報の差が大きくなりやすいため、私たちは特定の企業や代理人に肩入れせず、中立であり続けることを最優先にしています。紹介の順番が手数料の多寡で決まると、選手の利益が後回しになるからです。その思想を仕組みにするため、どの企業からも同じ条件・同じ手数料で受け取っています。金額の大小で、扱う優先も、出す情報も変えません。紹介は適性と、移籍の時期が合うかだけで判断します。",
  },
  {
    q: "掲載している情報は、いつ更新されますか。",
    a: "月次で最新化します。移籍規則・外国人枠・ビザは年度で動くため、最終判断は個別相談にてご確認ください。",
  },
];

export function Faq() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-page">
        <p className="kicker mb-4">FAQ</p>
        <h2 className="font-mincho text-3xl md:text-4xl">よくある質問</h2>
        <div className="mt-12 border-t border-gold/25">
          {FAQS.map((item) => (
            <details key={item.q} className="faq-item border-b border-gold/25">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-mincho text-lg md:text-xl">
                <span>{item.q}</span>
                <span className="faq-mark mt-1 shrink-0 font-latin text-base leading-none text-gold" aria-hidden>
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-6 text-sm leading-relaxed text-mute md:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
