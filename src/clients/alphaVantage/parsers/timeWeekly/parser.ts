import { RawWeeklyResponse, WeeklyResponse } from '../../models/time_weekly';
import { BaseParser } from '../base';

/**
 * A concrete parser class related to the Time Series Weekly Endpoint from the AlphaVantage API.
 */
export class WeeklyParser extends BaseParser<
  RawWeeklyResponse,
  WeeklyResponse
> {
  public Parse(data: RawWeeklyResponse): WeeklyResponse {
    return {
      metadata: {
        about: data['Meta Data']['1. Information'],
        symbol: data['Meta Data']['2. Symbol'],
        lastRefreshed: data['Meta Data']['3. Last Refreshed'],
        timeZone: data['Meta Data']['4. Time Zone'],
      },
      records: Object.entries(data['Weekly Time Series']).map(
        ([key, value]) => {
          return {
            open: parseFloat(value['1. open']),
            high: parseFloat(value['2. high']),
            low: parseFloat(value['3. low']),
            close: parseFloat(value['4. close']),
            volume: parseInt(value['5. volume']),
            week: key,
          };
        }
      ),
    };
  }
}
