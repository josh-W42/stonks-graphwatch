import { IntraDayResponse, RawIntraDayResponse } from '../../models/';
import { BaseParser } from '../base';

/**
 * A concrete parser class related to the Time Series IntraDay Endpoint from the AlphaVantage API.
 */
export class IntraDayParser extends BaseParser<
  RawIntraDayResponse,
  IntraDayResponse
> {
  public Parse(data: RawIntraDayResponse): IntraDayResponse {
    const keys = Object.keys(data) as (keyof RawIntraDayResponse)[];
    const timeSeriesKey = keys.find((key) => key !== 'Meta Data');

    if (!timeSeriesKey) {
      // Shouldn't occur as unless there is an API change to the 'Meta Data'
      // key which will ultimately result in all parsers failing.
      console.warn(
        'Error When Parsing An IntraDay Response: Cannot Find Time Series Key'
      );
      return {
        metadata: {
          symbol: data['Meta Data']['2. Symbol'],
          about: data['Meta Data']['1. Information'],
          lastRefreshed: data['Meta Data']['3. Last Refreshed'],
          interval: data['Meta Data']['4. Interval'],
          outputSizeType: data['Meta Data']['5. Output Size'],
          timeZone: data['Meta Data']['6. Time Zone'],
        },
        records: [],
      };
    }

    return {
      metadata: {
        symbol: data['Meta Data']['2. Symbol'],
        about: data['Meta Data']['1. Information'],
        lastRefreshed: data['Meta Data']['3. Last Refreshed'],
        interval: data['Meta Data']['4. Interval'],
        outputSizeType: data['Meta Data']['5. Output Size'],
        timeZone: data['Meta Data']['6. Time Zone'],
      },
      records: Object.entries(data[timeSeriesKey]).map(([key, value]) => {
        return {
          date: key,
          open: parseFloat(value['1. open']),
          high: parseFloat(value['2. high']),
          low: parseFloat(value['3. low']),
          close: parseFloat(value['4. close']),
          volume: parseInt(value['5. volume']),
        };
      }),
    };
  }
}
