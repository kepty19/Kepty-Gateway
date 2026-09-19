import type { ContinentId } from "@/data/continents";

export type Season = "year" | "spring" | "summer" | "autumn" | "winter";
export type Country = "spain" | "england" | "germany" | "thailand" | "malaysia" | "australia";
export type PartnerKind = "クラブ" | "企業" | "代理人";

export type JuniorPartner = {
  id: string;
  name: string;
  city: string;
  country: Country;
  continent: ContinentId;
  flag: string;
  kind: PartnerKind;
  seasons: Season[];
  ages: string;
  summary: string;
};

export const JUNIOR_PARTNERS: JuniorPartner[] = [
  {
    id: "madrid-metro",
    name: "Madrid Metropolitan Training",
    city: "Madrid",
    country: "spain",
    continent: "europe",
    flag: "es",
    kind: "クラブ",
    seasons: ["spring", "summer"],
    ages: "小5 〜 中3",
    summary: "首都圏の提携クラブ。技術反復と対人の密度が高い。",
  },
  {
    id: "catalunya-youth",
    name: "Catalunya Youth Environment",
    city: "Barcelona area",
    country: "spain",
    continent: "europe",
    flag: "es",
    kind: "クラブ",
    seasons: ["summer", "year"],
    ages: "小5 〜 高1",
    summary: "小さなスペースでの判断を主眼にした、カタルーニャの提携クラブ。",
  },
  {
    id: "iberia-youth-desk",
    name: "Iberia Youth Desk",
    city: "Madrid / Barcelona",
    country: "spain",
    continent: "europe",
    flag: "es",
    kind: "代理人",
    seasons: ["year"],
    ages: "中1 〜 高1",
    summary: "スペイン下部ユースへの紹介を行う、提携のライセンス仲介デスク。",
  },
  {
    id: "london-academy",
    name: "Greater London Academy Partner",
    city: "London",
    country: "england",
    continent: "europe",
    flag: "gb-eng",
    kind: "クラブ",
    seasons: ["summer", "winter"],
    ages: "小5 〜 中3",
    summary: "身体接触とテンポが前提の、ロンドン圏の提携クラブ。",
  },
  {
    id: "northwest-coaching",
    name: "North West Programme Co.",
    city: "North West England",
    country: "england",
    continent: "europe",
    flag: "gb-eng",
    kind: "企業",
    seasons: ["winter"],
    ages: "中1 〜 高1",
    summary: "冬期プログラムを運営する、北西イングランドの提携企業。",
  },
  {
    id: "uk-youth-desk",
    name: "UK Youth Desk",
    city: "London",
    country: "england",
    continent: "europe",
    flag: "gb-eng",
    kind: "代理人",
    seasons: ["year"],
    ages: "中1 〜 高1",
    summary: "FA登録の仲介パートナー。ユースから下部クラブへの接続を担う。",
  },
  {
    id: "bavaria-youth",
    name: "Bavaria Youth Partner",
    city: "Munich area",
    country: "germany",
    continent: "europe",
    flag: "de",
    kind: "クラブ",
    seasons: ["spring"],
    ages: "小5 〜 中3",
    summary: "戦術の型と役割理解を軸にした、バイエルン圏の提携クラブ。",
  },
  {
    id: "berlin-method",
    name: "Berlin Metropolitan Partner",
    city: "Berlin",
    country: "germany",
    continent: "europe",
    flag: "de",
    kind: "クラブ",
    seasons: ["summer"],
    ages: "中1 〜 高1",
    summary: "ゲームモデルの一端に触れられる、ベルリン圏の提携クラブ。",
  },
  {
    id: "bangkok-youth",
    name: "Bangkok Youth Partner",
    city: "Bangkok",
    country: "thailand",
    continent: "asia",
    flag: "th",
    kind: "クラブ",
    seasons: ["year", "summer"],
    ages: "小5 〜 高1",
    summary: "首都圏の提携クラブ。東南アジアで先に現地環境を踏む入口。",
  },
  {
    id: "kl-academy",
    name: "Kuala Lumpur Programme Co.",
    city: "Kuala Lumpur",
    country: "malaysia",
    continent: "asia",
    flag: "my",
    kind: "企業",
    seasons: ["year"],
    ages: "中1 〜 高1",
    summary: "通年で渡航枠を調整する、クアラルンプールの提携企業。",
  },
  {
    id: "sydney-youth",
    name: "Sydney Youth Partner",
    city: "Sydney",
    country: "australia",
    continent: "oceania",
    flag: "au",
    kind: "クラブ",
    seasons: ["autumn", "winter"],
    ages: "小5 〜 中3",
    summary: "NPL系統の提携クラブ。日本の秋〜冬が、現地の競走シーズン。",
  },
];

export const SEASON_LABEL: Record<Season, string> = {
  year: "通期",
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬",
};

export const COUNTRY_LABEL: Record<Country, string> = {
  spain: "スペイン",
  england: "イングランド",
  germany: "ドイツ",
  thailand: "タイ",
  malaysia: "マレーシア",
  australia: "オーストラリア",
};

export const COUNTRY_FLAG: Record<Country, string> = {
  spain: "es",
  england: "gb-eng",
  germany: "de",
  thailand: "th",
  malaysia: "my",
  australia: "au",
};

export const COUNTRY_CONTINENT: Record<Country, ContinentId> = {
  spain: "europe",
  england: "europe",
  germany: "europe",
  thailand: "asia",
  malaysia: "asia",
  australia: "oceania",
};
