export interface IntraDayMetaData {
  symbol?: string;
  about?: string;
  lastRefreshed?: string;
  outputSizeType?: string;
  timeZone?: string;
  interval?: string;
}

export interface IntraDayRecord {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface IntraDayResponse {
  metadata?: IntraDayMetaData;
  records?: IntraDayRecord[];
}

export interface RawIntraDayMetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Interval': string;
  '5. Output Size': string;
  '6. Time Zone': string;
}

export interface RawIntraDayRecord {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export type RawIntraDayResponse = RawOneMinResponse &
  RawFiveMinResponse &
  RawFifteenMinResponse &
  RawThirtyMinResponse &
  RawHourResponse;

export interface RawOneMinResponse {
  'Meta Data': RawIntraDayMetaData;
  'Time Series (1min)': Record<string, RawIntraDayRecord>;
}

export interface RawFiveMinResponse {
  'Meta Data': RawIntraDayMetaData;
  'Time Series (5min)': Record<string, RawIntraDayRecord>;
}

export interface RawFifteenMinResponse {
  'Meta Data': RawIntraDayMetaData;
  'Time Series (15min)': Record<string, RawIntraDayRecord>;
}

export interface RawThirtyMinResponse {
  'Meta Data': RawIntraDayMetaData;
  'Time Series (30min)': Record<string, RawIntraDayRecord>;
}

export interface RawHourResponse {
  'Meta Data': RawIntraDayMetaData;
  'Time Series (60min)': Record<string, RawIntraDayRecord>;
}

export const enum IntraDayIntervalTypes {
  '1min' = '1min',
  '5min' = '5min',
  '15min' = '15min',
  '30min' = '30min',
  '60min' = '60min',
}
