import { AlphaVantageClient } from '../../clients/alphaVantage';
import {
  RawSearchResponse,
  SearchResponse,
} from '../../clients/alphaVantage/models/search/types';
import { SearchParser } from '../../clients/alphaVantage/parsers';
import { SearchEndpointQuery } from '../../clients/alphaVantage/queries';

export class StockController {
  public static async GetStocks(input: string): Promise<SearchResponse> {
    const data = await AlphaVantageClient.Request<RawSearchResponse>({
      query: new SearchEndpointQuery({
        keywords: input,
      }),
    });
    const parser = new SearchParser();
    return parser.Parse(data);
  }
}
