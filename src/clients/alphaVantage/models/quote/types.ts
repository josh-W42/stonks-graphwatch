export interface Quote {
  symbol?: string;
  open?: number;
  high?: number;
  low?: number;
  price?: number;
  volume?: number;
  latestTradingDay?: string;
  previousClose?: number;
  change?: number;
  changePercent?: string;
}

export interface RawQuote {
  '01. symbol': string;
  '02. open': string;
  '03. high': string;
  '04. low': string;
  '05. price': string;
  '06. volume': string;
  '07. latest trading day': string;
  '08. previous close': string;
  '09. change': string;
  '10. change percent': string;
}

export interface QuoteResponse {
  data: Quote;
}

export interface RawQuoteResponse {
  'Global Quote': RawQuote;
}
