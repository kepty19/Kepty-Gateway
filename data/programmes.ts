export type Season = "spring" | "summer" | "winter";
export type Country = "spain" | "england" | "germany";

export type Programme = {
  id: string;
  name: string;
  season: Season;
  country: Country;
  days: number;
  school: string;
  ages: string;
  focus: string;
  fee: string;
  english: boolean;
};

export const PROGRAMMES: Programme[] = [
  {
    id: "madrid-spring",
    name: "Madrid Immersion",
    season: "spring",
    country: "spain",
    days: 8,
    school: "Madrid metropolitan training centre（提携）",
    ages: "小5 〜 中3",
    focus: "高強度の技術反復と、英語でのポジション指示。",
    fee: "¥310,000〜",
    english: true,
  },
  {
    id: "barcelona-summer",
    name: "Catalunya Summer Atelier",
    season: "summer",
    country: "spain",
    days: 10,
    school: "Catalunya youth environment（提携）",
    ages: "小5 〜 高1",
    focus: "小さなスペースでの判断と、主張する英語。",
    fee: "¥340,000〜",
    english: true,
  },
  {
    id: "london-summer",
    name: "London Academy Week",
    season: "summer",
    country: "england",
    days: 7,
    school: "Greater London academy partner",
    ages: "小5 〜 中3",
    focus: "身体接触とテンポ。ピッチ英語の実戦。",
    fee: "¥320,000〜",
    english: true,
  },
  {
    id: "manchester-winter",
    name: "North West Winter",
    season: "winter",
    country: "england",
    days: 7,
    school: "North West coaching partner",
    ages: "中1 〜 高1",
    focus: "冬のピッチでの戦う姿勢と、短い指示の英語。",
    fee: "¥300,000〜",
    english: true,
  },
  {
    id: "munich-spring",
    name: "Bavaria Spring Camp",
    season: "spring",
    country: "germany",
    days: 8,
    school: "Bavaria youth partner",
    ages: "小5 〜 中3",
    focus: "戦術の型と、英語での役割理解。",
    fee: "¥330,000〜",
    english: true,
  },
  {
    id: "berlin-summer",
    name: "Berlin Method Week",
    season: "summer",
    country: "germany",
    days: 9,
    school: "Berlin metropolitan partner",
    ages: "中1 〜 高1",
    focus: "ゲームモデルの一端と、自己紹介できる英語。",
    fee: "¥350,000〜",
    english: true,
  },
];

export const SEASON_LABEL: Record<Season, string> = {
  spring: "春休み",
  summer: "夏休み",
  winter: "冬休み",
};

export const COUNTRY_LABEL: Record<Country, string> = {
  spain: "スペイン",
  england: "イギリス",
  germany: "ドイツ",
};
