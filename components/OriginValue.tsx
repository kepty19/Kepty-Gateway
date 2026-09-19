function IconDatabase() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden>
      <ellipse cx="20" cy="10" rx="12" ry="5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 10v10c0 2.8 5.4 5 12 5s12-2.2 12-5V10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8 20v10c0 2.8 5.4 5 12 5s12-2.2 12-5V20"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function IconConsult() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 13v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
      <circle cx="20" cy="26.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconMeeting() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden>
      <circle cx="14" cy="15" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="26" cy="15" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7 28c1.2-4 4.2-6 7-6s5.8 2 7 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path
        d="M19 28c1.2-4 4.2-6 7-6s5.8 2 7 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

const PILLARS = [
  {
    n: "01",
    t: "情報を得る",
    d: "各国のリーグ時期、移籍期間、外国人枠、ビザを、毎月更新するデータベースで公開しています。",
    icon: IconDatabase,
  },
  {
    n: "02",
    t: "第三者に相談する",
    d: "利害関係の外側に立つ企業として、中立の立場から個別にご相談を受けます。",
    icon: IconConsult,
  },
  {
    n: "03",
    t: "当事者に話を聞く",
    d: "挑戦を支える企業、代理人、クラブとの面談機会をご案内します。",
    icon: IconMeeting,
  },
];

export function OriginValue() {
  return (
    <section className="border-y border-gold/20 bg-navy/30 px-5 py-24 md:px-10">
      <div className="mx-auto max-w-page">
        <p className="kicker mb-4">Why we exist</p>
        <h2 className="max-w-3xl font-mincho text-3xl leading-snug md:text-4xl">
          海外挑戦に、正しい情報を。
        </h2>
        <div className="mt-10 max-w-3xl space-y-5 text-sm leading-[2] text-mute md:text-base">
          <p>
            高校・大学から海外へ挑戦する選手、プロ契約を経て移籍する選手は、年々増えています。しかし海外では、リーグの仕組みや契約条件の情報が日本国内ほど整っていません。選手は自分の責任で決断しがちであり、その結果、不当な条件や費用での渡航、正確な情報がないまま機会を逃すケースが増えていると聞きます。
          </p>
          <p className="text-ivory">
            Kepty Global Gatewayは、情報の透明性をつくり、選手に機会を届け、サッカー人生とその後をより良いものにするために発足しました。
          </p>
        </div>

        <div className="gold-line my-16" />

        <p className="kicker mb-4">What we provide</p>
        <h3 className="max-w-3xl font-mincho text-2xl leading-snug md:text-3xl">
          情報の透明性と、挑戦の安心性。
        </h3>
        <p className="mt-4 max-w-2xl text-sm text-mute">
          この二つを、次の三つの仕組みで実現します。
        </p>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.n}
                className="group panel relative overflow-hidden p-7 transition hover:border-gold"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="text-gold">
                    <Icon />
                  </span>
                  <p className="kicker">{item.n}</p>
                </div>
                <h4 className="mt-8 font-mincho text-2xl">{item.t}</h4>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
