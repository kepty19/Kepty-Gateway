export type Partner = {
  id: string;
  name: string;
  logo?: string;
};

export const PLATINUM_PARTNERS: Partner[] = [{ id: "platinum-1", name: "Platinum Partner" }];

export const GOLD_PARTNERS: Partner[] = [
  { id: "gold-1", name: "Gold Partner" },
  { id: "gold-2", name: "Gold Partner" },
  { id: "gold-3", name: "Gold Partner" },
];

export const SILVER_PARTNERS: Partner[] = [
  { id: "silver-1", name: "Silver Partner" },
  { id: "silver-2", name: "Silver Partner" },
  { id: "silver-3", name: "Silver Partner" },
];
