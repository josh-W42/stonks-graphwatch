export interface DailyMetaData {
  symbol?: string;
  about?: string;
  lastRefreshed?: string;
  outputSizeType?: string;
  timeZone?: string;
}

export interface DailyRecord {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface DailyResponse {
  metadata?: DailyMetaData;
  records?: DailyRecord[];
}

export interface RawDailyMetaData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
}

export interface RawDailyRecord {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface RawDailyResponse {
  "Meta Data": RawDailyMetaData;
  "Time Series (Daily)": Record<string, RawDailyRecord>;
}
