import type { ContinentId } from "@/data/continents";

export type LeagueCountry = {
  id: string;
  name: string;
  nameEn: string;
  flag: string;
  continent: ContinentId;
  structure: string[];
  leaguePeriod: string;
  summerWindow: string;
  winterWindow: string;
  foreignCap: string;
  asianQuota: string | null;
  visa: string;
  japanesePlayers: string;
  japaneseNote: string;
};

export const LEAGUES: LeagueCountry[] = [
  {
    id: "spain",
    name: "スペイン",
    nameEn: "Spain",
    flag: "es",
    continent: "europe",
    structure: [
      "LaLiga（1部）",
      "LaLiga Hypermotion（2部）",
      "Primera Federación（3部）",
      "Segunda Federación（4部）",
    ],
    leaguePeriod: "8月中旬 〜 翌5月下旬（LaLiga）",
    summerWindow: "7月上旬 〜 9月上旬（年度により前後）",
    winterWindow: "1月上旬 〜 2月上旬",
    foreignCap: "非EU 3（1部の登録上限。EU国籍は別扱い）",
    asianQuota: null,
    visa: "就労許可＋連盟登録。EU外はクラブの雇用契約が前提。",
    japanesePlayers: "約10",
    japaneseNote: "1部〜2部の公開ロスター概数。下部は未集計。",
  },
  {
    id: "england",
    name: "イングランド",
    nameEn: "England",
    flag: "gb-eng",
    continent: "europe",
    structure: [
      "Premier League",
      "EFL Championship",
      "League One / Two",
      "National League 以下",
    ],
    leaguePeriod: "8月 〜 翌5月（Premier / EFL）",
    summerWindow: "6月中旬 〜 8月末（年度により前後）",
    winterWindow: "1月1日 〜 1月末",
    foreignCap: "人数枠なし。実質の門は就労ビザ / GBE",
    asianQuota: null,
    visa: "Skilled Worker + GBE。クラブのスポンサーライセンスが必要。",
    japanesePlayers: "約15",
    japaneseNote: "プレミア〜リーグ下部の公開ロスター概数。",
  },
  {
    id: "germany",
    name: "ドイツ",
    nameEn: "Germany",
    flag: "de",
    continent: "europe",
    structure: ["Bundesliga", "2. Bundesliga", "3. Liga", "Regionalliga"],
    leaguePeriod: "8月 〜 翌5月",
    summerWindow: "7月 〜 8月末",
    winterWindow: "1月 〜 2月初旬",
    foreignCap: "国籍の人数枠なし。非EUは労働許可と給与下限",
    asianQuota: null,
    visa: "就労ビザ / EU Blue Card。シーズン契約と報酬証明。",
    japanesePlayers: "約20",
    japaneseNote: "1部〜3部の公開ロスター概数。",
  },
  {
    id: "thailand",
    name: "タイ",
    nameEn: "Thailand",
    flag: "th",
    continent: "asia",
    structure: ["Thai League 1", "Thai League 2", "下部地域リーグ"],
    leaguePeriod: "8月 〜 翌5月（2025/26）",
    summerWindow: "開幕前（概ね6〜7月、年度確認）",
    winterWindow: "中盤（概ね12〜1月）",
    foreignCap: "登録 非ASEAN 7 / 試合出場 5",
    asianQuota: "ASEANは登録無制限・出場2。日本人はASEAN対象外のため非ASEAN枠。",
    visa: "就労ビザ＋連盟登録。クラブオファーが起点。",
    japanesePlayers: "8",
    japaneseNote: "Thai League 1・2025/26公開ロスター。",
  },
  {
    id: "malaysia",
    name: "マレーシア",
    nameEn: "Malaysia",
    flag: "my",
    continent: "asia",
    structure: ["Malaysia Super League", "A1 Semi-Pro / 下部"],
    leaguePeriod: "8月 〜 翌5月（2025/26）",
    summerWindow: "開幕前（夏、年度確認）",
    winterWindow: "中盤ウィンドウ（年度確認）",
    foreignCap: "登録15 / 出場は世界枠4",
    asianQuota: "出場 アジア1 ＋ ASEAN 1。日本人はアジア枠に入り得る。",
    visa: "就労パス。クラブがスポンサーとなるのが一般的。",
    japanesePlayers: "数名",
    japaneseNote: "Super League公開ロスターの概数。",
  },
  {
    id: "australia",
    name: "オーストラリア",
    nameEn: "Australia",
    flag: "au",
    continent: "oceania",
    structure: ["A-League Men", "各州 NPL", "州下部"],
    leaguePeriod: "10月 〜 翌5月（A-League）",
    summerWindow: "開幕前（南半球冬〜春、年度確認）",
    winterWindow: "中盤。NPLは州ごとに異なる",
    foreignCap: "ビザ選手 5（A-League）",
    asianQuota: null,
    visa: "Temporary Activity / スポーツ人材。クラブの公式オファーが前提。",
    japanesePlayers: "数名〜十数名",
    japaneseNote: "A-Leagueは数名。NPLを含めると十数名規模。",
  },
];
