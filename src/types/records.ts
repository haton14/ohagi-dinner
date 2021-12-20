import type { Record } from "./record";

export interface Records {
  years: YearRecord[];
}

export interface YearRecord {
  year: number;
  months: MonthRecord[];
}

export interface MonthRecord {
  month: number;
  days: DayRecord[];
}

export interface DayRecord {
    day: number;
    record: Record;
}
