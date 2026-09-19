const FAQS = [
  {
    q: "選手側に、費用は発生しますか。",
    a: "発生しません。すべての挑戦を支えるには、このサービスを持続させる必要があります。その運営費は選手からは受け取らず、企業側からの手数料で賄います。",
  },
  {
    q: "特定の企業や代理人を、強く推すことはありますか。",
    a: "ありません。中立でい続けるため、どの企業からも同じ条件・同じ手数料で受け取ります。金額の大小で、扱う優先も、出す情報も、変えない。紹介は適性と、窓が開いているかだけで判断します。",
  },
  {
    q: "掲載している情報は、いつ更新されますか。",
    a: "月次で最新化します。移籍規則・外国人枠・ビザは年度で動くため、最終判断は個別の診断で確認してください。",
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
