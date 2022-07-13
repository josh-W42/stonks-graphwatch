export interface WeeklyMetaData {
  symbol?: string;
  about?: string;
  lastRefreshed?: string;
  timeZone?: string;
}

export interface WeeklyRecord {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface WeeklyResponse {
  metadata?: WeeklyMetaData;
  records?: WeeklyRecord[];
}

export interface RawWeeklyMetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Time Zone': string;
}

export interface RawWeeklyRecord {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface RawWeeklyResponse {
  'Meta Data': RawWeeklyMetaData;
  'Weekly Time Series': Record<string, RawWeeklyRecord>;
}
