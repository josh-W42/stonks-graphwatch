import { DailyResponse, RawDailyResponse } from "../../models";
import { BaseParser } from "../base";

/**
 * A concrete parser class related to the Time Series Daily Endpoint from the AlphaVantage API.
 */
export class DailyParser extends BaseParser<RawDailyResponse, DailyResponse> {
  public Parse(data: RawDailyResponse): DailyResponse {
    return {
      metadata: {
        symbol: data["Meta Data"]["2. Symbol"],
        about: data["Meta Data"]["1. Information"],
        lastRefreshed: data["Meta Data"]["3. Last Refreshed"],
        outputSizeType: data["Meta Data"]["4. Output Size"],
        timeZone: data["Meta Data"]["5. Time Zone"],
      },
      records: Object.entries(data["Time Series (Daily)"]).map(
        ([key, value]) => {
          return {
            date: key,
            open: value["1. open"],
            high: value["2. high"],
            low: value["3. low"],
            close: value["4. close"],
            volume: value["5. volume"],
          };
        }
      ),
    };
  }
}
