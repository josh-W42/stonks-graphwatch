export interface MonthlyMetaData {
  symbol?: string;
  about?: string;
  lastRefreshed?: string;
  timeZone?: string;
}

export interface MonthlyRecord {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface MonthlyResponse {
  metadata?: MonthlyMetaData;
  records?: MonthlyRecord[];
}

export interface RawMonthlyMetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Time Zone': string;
}

export interface RawMonthlyRecord {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface RawMonthlyResponse {
  'Meta Data': RawMonthlyMetaData;
  'Monthly Time Series': Record<string, RawMonthlyRecord>;
}
