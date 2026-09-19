import type { ContinentId } from "@/data/continents";

export type Season = "year" | "spring" | "summer" | "autumn" | "winter";
export type Country = "spain" | "england" | "germany" | "thailand" | "malaysia" | "australia";

export type JuniorPartner = {
  id: string;
  name: string;
  city: string;
  country: Country;
  continent: ContinentId;
  flag: string;
  type: string;
  seasons: Season[];
  ages: string;
  format: string;
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
    type: "Academy partner",
    seasons: ["spring", "summer"],
    ages: "小5 〜 中3",
    format: "少人数・滞在型",
    summary: "首都圏の提携トレーニング拠点。技術反復と対人の密度が高い。",
  },
  {
    id: "catalunya-youth",
    name: "Catalunya Youth Environment",
    city: "Barcelona area",
    country: "spain",
    continent: "europe",
    flag: "es",
    type: "Youth environment",
    seasons: ["summer", "year"],
    ages: "小5 〜 高1",
    format: "滞在型 / 通期相談可",
    summary: "小さなスペースでの判断を主眼にした、カタルーニャの提携環境。",
  },
  {
    id: "london-academy",
    name: "Greater London Academy Partner",
    city: "London",
    country: "england",
    continent: "europe",
    flag: "gb-eng",
    type: "Academy partner",
    seasons: ["summer", "winter"],
    ages: "小5 〜 中3",
    format: "少人数・週単位",
    summary: "身体接触とテンポが前提の、ロンドン圏アカデミー提携。",
  },
  {
    id: "northwest-coaching",
    name: "North West Coaching Partner",
    city: "North West England",
    country: "england",
    continent: "europe",
    flag: "gb-eng",
    type: "Coaching partner",
    seasons: ["winter"],
    ages: "中1 〜 高1",
    format: "少人数・滞在型",
    summary: "冬のピッチで戦う姿勢を見る、北西イングランドの提携先。",
  },
  {
    id: "bavaria-youth",
    name: "Bavaria Youth Partner",
    city: "Munich area",
    country: "germany",
    continent: "europe",
    flag: "de",
    type: "Youth partner",
    seasons: ["spring"],
    ages: "小5 〜 中3",
    format: "少人数・滞在型",
    summary: "戦術の型と役割理解を軸にした、バイエルン圏の提携。",
  },
  {
    id: "berlin-method",
    name: "Berlin Metropolitan Partner",
    city: "Berlin",
    country: "germany",
    continent: "europe",
    flag: "de",
    type: "Academy partner",
    seasons: ["summer"],
    ages: "中1 〜 高1",
    format: "少人数・週単位",
    summary: "ゲームモデルの一端に触れられる、ベルリン圏の提携拠点。",
  },
  {
    id: "bangkok-youth",
    name: "Bangkok Youth Partner",
    city: "Bangkok",
    country: "thailand",
    continent: "asia",
    flag: "th",
    type: "Academy partner",
    seasons: ["year", "summer"],
    ages: "小5 〜 高1",
    format: "通期相談 / 夏季短期",
    summary: "首都圏のユース提携。東南アジアで先に本物の環境を踏む入口。",
  },
  {
    id: "kl-academy",
    name: "Kuala Lumpur Academy Partner",
    city: "Kuala Lumpur",
    country: "malaysia",
    continent: "asia",
    flag: "my",
    type: "Academy partner",
    seasons: ["year"],
    ages: "中1 〜 高1",
    format: "通期・滞在相談",
    summary: "通年で枠を調整できる、クアラルンプールのアカデミー提携。",
  },
  {
    id: "sydney-youth",
    name: "Sydney Youth Partner",
    city: "Sydney",
    country: "australia",
    continent: "oceania",
    flag: "au",
    type: "Youth partner",
    seasons: ["autumn", "winter"],
    ages: "小5 〜 中3",
    format: "少人数・滞在型",
    summary: "NPL系統の提携環境。日本の秋〜冬が、現地の競走シーズン。",
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
