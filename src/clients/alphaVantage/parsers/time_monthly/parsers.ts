import { MonthlyResponse, RawMonthlyResponse } from '../../models';
import { BaseParser } from '../base';

/**
 * A concrete parser class related to the Time Series Monthly Endpoint from the AlphaVantage API.
 */
export class MonthlyParser extends BaseParser<
  RawMonthlyResponse,
  MonthlyResponse
> {
  public Parse(data: RawMonthlyResponse): MonthlyResponse {
    return {
      metadata: {
        symbol: data['Meta Data']['2. Symbol'],
        about: data['Meta Data']['1. Information'],
        lastRefreshed: data['Meta Data']['3. Last Refreshed'],
        timeZone: data['Meta Data']['4. Time Zone'],
      },
      records: Object.entries(data['Monthly Time Series']).map(
        ([key, value]) => {
          return {
            date: key,
            open: parseFloat(value['1. open']),
            high: parseFloat(value['2. high']),
            low: parseFloat(value['3. low']),
            close: parseFloat(value['4. close']),
            volume: parseInt(value['5. volume']),
          };
        }
      ),
    };
  }
}
