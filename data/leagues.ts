export type LeagueCountry = {
  id: string;
  name: string;
  nameEn: string;
  structure: string[];
  summerWindow: string;
  winterWindow: string;
  foreignCap: string;
  visa: string;
  japanMarket: string;
};

export const LEAGUES: LeagueCountry[] = [
  {
    id: "spain",
    name: "スペイン",
    nameEn: "Spain",
    structure: [
      "LaLiga（1部）",
      "LaLiga Hypermotion（2部）",
      "Primera Federación（3部）",
      "Segunda Federación（4部）",
    ],
    summerWindow: "7月上旬 〜 9月上旬（年度により前後）",
    winterWindow: "1月上旬 〜 2月上旬",
    foreignCap: "非EU枠はクラブ登録枠で制限。EUパスポート保有は別扱い。",
    visa: "就労許可＋連盟登録。下部ほど給与・契約形態の確認が必須。",
    japanMarket:
      "LaLiga直結より、3部〜4部と提携エージェント経由の着地が現実的。現地適応と出場機会を先に設計できる選手が残る。",
  },
  {
    id: "england",
    name: "イングランド",
    nameEn: "England",
    structure: [
      "Premier League",
      "EFL Championship",
      "League One / Two",
      "National League 以下",
    ],
    summerWindow: "6月中旬 〜 8月末（年度により前後）",
    winterWindow: "1月1日 〜 1月末",
    foreignCap: "国内枠というより、就労ビザ / GBE（Governing Body Endorsement）が実質の門。",
    visa: "非英選手はGBEポイントとクラブのスポンサーライセンスが前提。",
    japanMarket:
      "プレミアより Championship〜League One、あるいはNPL相当の下部で実績を積むルート。戦う姿勢と自己主張が選考そのもの。",
  },
  {
    id: "germany",
    name: "ドイツ",
    nameEn: "Germany",
    structure: ["Bundesliga", "2. Bundesliga", "3. Liga", "Regionalliga"],
    summerWindow: "7月 〜 8月末",
    winterWindow: "1月 〜 2月初旬",
    foreignCap: "EU外は労働許可と給与下限。3.Liga / Regionalligaはクラブごとに条件が分かれる。",
    visa: "就労ビザ。シーズン契約と最低報酬の証明が必要になることが多い。",
    japanMarket:
      "2.Bundesliga / 3.Ligaが現実的な入口。身体と戦術理解が、現場で効く。",
  },
  {
    id: "thailand",
    name: "タイ",
    nameEn: "Thailand",
    structure: ["Thai League 1", "Thai League 2", "下部地域リーグ"],
    summerWindow: "概ね5月 〜 7月（シーズン暦に依存）",
    winterWindow: "概ね12月 〜 1月",
    foreignCap: "外国人枠は年度改定が速い（本国枠＋ASEAN枠など）。最新告示の確認が必須。",
    visa: "就労ビザ＋連盟登録。エージェント経由のクラブオファーが起点。",
    japanMarket:
      "J3〜アマ上位からの挑戦先として市場が開いている。給与はクラブ格差が大きい。まずは枠とウィンドウを先に読む。",
  },
  {
    id: "malaysia",
    name: "マレーシア",
    nameEn: "Malaysia",
    structure: ["Malaysia Super League", "A1 Semi-Pro / 下部"],
    summerWindow: "シーズン前（春〜初夏、年度確認）",
    winterWindow: "中盤ウィンドウ（年度確認）",
    foreignCap: "外国人登録枠あり。国籍ミックスの指定が出ることがある。",
    visa: "就労パス。クラブがスポンサーとなるのが一般的。",
    japanMarket:
      "東南アジアでプロ契約を取りに行く選手の現実的な候補。『観光挑戦』ではなく、枠と代理人の質で結果が分かれる。",
  },
  {
    id: "australia",
    name: "オーストラリア",
    nameEn: "Australia",
    structure: ["A-League Men", "各州 NPL", "州下部"],
    summerWindow: "A-Leagueは南半球暦。開幕前と中盤にウィンドウ。",
    winterWindow: "NPLは州ごとに異なる。渡航前に州連盟カレンダーを確認。",
    foreignCap: "A-Leagueはビザ外国人枠が限られる。NPLは州規則。",
    visa: "スポーツ人材ビザ / 一時就労。クラブの公式オファーが前提。",
    japanMarket:
      "NPLでの出場機会が、A-Leagueや東南アジアへの次の材料になる。現地でのコミュニケーションと出場数が選考になる。",
  },
];
