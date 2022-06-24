import { QuoteResponse, RawQuoteResponse } from '../../models/quote';
import { BaseParser } from '../base';

export class QuoteParser extends BaseParser<RawQuoteResponse, QuoteResponse> {
  public Parse(data: RawQuoteResponse): QuoteResponse {
    return {
      data: {
        symbol: data['Global Quote']['01. symbol'],
        open: data['Global Quote']['02. open'],
        high: data['Global Quote']['03. high'],
        low: data['Global Quote']['04. low'],
        price: data['Global Quote']['05. price'],
        volume: data['Global Quote']['06. volume'],
        latestTradingDay: data['Global Quote']['07. latest trading day'],
        previousClose: data['Global Quote']['08. previous close'],
        change: data['Global Quote']['09. change'],
        changePercent: data['Global Quote']['10. change percent'],
      },
    };
  }
}
