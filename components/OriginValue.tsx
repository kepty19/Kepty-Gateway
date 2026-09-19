export function OriginValue() {
  return (
    <section className="border-y border-gold/20 bg-navy/30 px-5 py-24 md:px-10">
      <div className="mx-auto max-w-page">
        <p className="kicker mb-4">Why we exist</p>
        <h2 className="max-w-3xl font-mincho text-3xl leading-snug md:text-4xl">
          情報の歪みが、挑戦を削る。そこを、正す。
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-[1.95] text-mute md:text-base">
          <p>
            高校や大学から海を渡る選手も、プロ経由で移籍する選手も、年々増えています。海外は、情報の密度が変わる。アスリートは自責に倒れやすい。その二つが重なると、市場は歪みます。
          </p>
          <p>
            不当な条件や金額で渡航する者。正確な情報がないまま、機会を逃す者。同じ速さで増えていると聞きます。
          </p>
          <p className="text-ivory">
            だから、情報を透明にする。機会を増やす。サッカー人生と、その後を、少しでも良くする。
          </p>
        </div>

        <div className="gold-line my-16" />

        <p className="kicker mb-4">What we provide</p>
        <h3 className="max-w-3xl font-mincho text-2xl leading-snug md:text-3xl">
          情報の透明性と、挑戦の安心性。
        </h3>
        <p className="mt-4 max-w-2xl text-sm text-mute">
          その二つを、次の三つで渡します。
        </p>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "情報を得る",
              d: "リーグ、移籍期間、枠、ビザ。データベースは毎月、最新に保つ。",
            },
            {
              n: "02",
              t: "第三者に相談する",
              d: "利害の外側に立つ企業が、間に入る。中立の席から、地図を引く。",
            },
            {
              n: "03",
              t: "当事者に話を聞く",
              d: "支える企業、代理人、クラブと、面談の機会を用意する。",
            },
          ].map((item) => (
            <li key={item.n} className="panel p-7">
              <p className="kicker">{item.n}</p>
              <h4 className="mt-4 font-mincho text-2xl">{item.t}</h4>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
