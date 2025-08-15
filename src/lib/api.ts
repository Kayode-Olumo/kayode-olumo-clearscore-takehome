import http from "./http";
import type { Report, InsightDetails } from "./types";

export const REPORT_URL = process.env.NEXT_PUBLIC_REPORT_URL!;
export const INSIGHT_DETAILS_URL = process.env.NEXT_PUBLIC_INSIGHT_DETAILS_URL!;

export async function fetchReport(): Promise<Report> {
  const { data } = await http.get<Report>(REPORT_URL);
  return data;
}

export async function fetchInsightDetails(): Promise<InsightDetails> {
  const { data } = await http.get<InsightDetails>(INSIGHT_DETAILS_URL);
  return data;
}