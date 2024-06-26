import { MatchStock, RawSearchResponse, SearchResponse } from '../../models';
import { BaseParser } from '../base';

/**
 * A concrete parser class related to the Search Endpoint from the AlphaVantage API.
 */
export class SearchParser extends BaseParser<
  RawSearchResponse,
  SearchResponse
> {
  public Parse(data: RawSearchResponse): SearchResponse {
    return {
      bestMatches: data.bestMatches.map((stock) => {
        const parsedStock: MatchStock = {};
        for (const [malformedKey, value] of Object.entries(stock)) {
          parsedStock[`${malformedKey.split(' ')[1]}` as keyof MatchStock] =
            value;
        }
        return parsedStock;
      }),
    };
  }
}
