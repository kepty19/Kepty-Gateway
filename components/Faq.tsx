const FAQS = [
  {
    q: "個別相談に、費用は発生しますか。",
    a: "発生しません。個別相談は、選手・保護者のご負担なくご利用いただけます。",
  },
  {
    q: "特定の企業や代理人を、強く推すことはありますか。",
    a: "ありません。海外挑戦では情報の差が大きくなりやすいため、特定の企業や代理人に肩入れせず、中立であり続けることを最優先にしています。その思想を仕組みにするため、企業様からも手数料はいただきません。",
  },
  {
    q: "掲載している情報は、いつ更新されますか。",
    a: "毎月更新しています。ただし、ネット上にない現地の細かい情報までは、弊社でも取りきれない場合があります。",
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
