import { QuoteResponse, RawQuoteResponse } from '../../models/quote';
import { BaseParser } from '../base';

/**
 * A concrete parser class related to the Quote Endpoint from the AlphaVantage API.
 */
export class QuoteParser extends BaseParser<RawQuoteResponse, QuoteResponse> {
  public Parse(data: RawQuoteResponse): QuoteResponse {
    return {
      data: {
        symbol: data['Global Quote']['01. symbol'],
        open: parseFloat(data['Global Quote']['02. open']),
        high: parseFloat(data['Global Quote']['03. high']),
        low: parseFloat(data['Global Quote']['04. low']),
        price: parseFloat(data['Global Quote']['05. price']),
        volume: parseInt(data['Global Quote']['06. volume']),
        latestTradingDay: data['Global Quote']['07. latest trading day'],
        previousClose: parseFloat(data['Global Quote']['08. previous close']),
        change: parseFloat(data['Global Quote']['09. change']),
        changePercent: data['Global Quote']['10. change percent'],
      },
    };
  }
}
