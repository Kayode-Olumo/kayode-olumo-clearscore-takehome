export type Money = { amount: number };
export type Account = {
  accountCategory: "credit_cards" | string;
  overview?: { balance?: Money; limit?: Money };
};

export type Report = {
  accounts?: Account[];
  personal?: {
    publicInfo?: { courtAndInsolvencies?: unknown[] };
    electoralRoll?: { current?: boolean }[];
  };
};

export type InsightKind = "publicInfo" | "creditUtil" | "electoralRoll";
export type InsightStatus = "On Track" | "Off Track";

export type Insight = {
  id: InsightKind;
  title: string;
  body: string;
  impact: "High Impact" | "Medium Impact";
  status: InsightStatus;
  canExpand?: boolean;
};

export type InsightDetails = {
  title: string;
  onTrackDescription: string;
  offTrackDescription: string;
  details: { title: string; description: string }[];
};