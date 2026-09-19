export type AgentDesk = {
  region: string;
  title: string;
  focus: string;
  strength: string;
  note: string;
};

export const AGENT_DESKS: AgentDesk[] = [
  {
    region: "Spain",
    title: "Iberia Licensed Desk",
    focus: "スペイン 3部〜2部、ポルトガル下部",
    strength: "連盟登録と非EU枠の事前整理。現地クラブとの紹介経路。",
    note: "紹介は適性診断後。個人名の公開は契約に応じて行います。",
  },
  {
    region: "England",
    title: "UK Intermediary Desk",
    focus: "Championship 〜 National League",
    strength: "GBE見込みの仮診断と、下部クラブのスカウティング導線。",
    note: "FA登録仲介者のみを紹介。無資格の『代理人』は扱いません。",
  },
  {
    region: "Germany",
    title: "DACH Partner Desk",
    focus: "2.Bundesliga / 3.Liga / Regionalliga",
    strength: "労働許可の前提確認と、ドイツ語圏クラブの受け入れ温度。",
    note: "ライセンス保有パートナー経由。直接の移籍保証はしません。",
  },
  {
    region: "Southeast Asia",
    title: "ASEAN Club Desk",
    focus: "タイ / マレーシア / 周辺リーグ",
    strength: "外国人枠の年度改定を踏まえた、今季入れるクラブの洗い出し。",
    note: "オファー前の条件監査をKeptyが同席します。",
  },
  {
    region: "Australia",
    title: "Oceania Pathway Desk",
    focus: "A-League 周辺および州NPL",
    strength: "南半球シーズンへのタイミング設計とビザの順序。",
    note: "州ごとの規則差が大きいため、個別に確認します。",
  },
];
