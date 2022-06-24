import { AlphaVantageClient } from '../../clients/alphaVantage';
import {
  QuoteResponse,
  RawQuoteResponse,
  RawSearchResponse,
  SearchResponse,
} from '../../clients/alphaVantage/models';
import { QuoteParser, SearchParser } from '../../clients/alphaVantage/parsers';
import {
  QuoteEndpointQuery,
  SearchEndpointQuery,
} from '../../clients/alphaVantage/queries';

export class StockController {
  public static async GetStocks(input: string): Promise<SearchResponse> {
    const data = await AlphaVantageClient.Request<RawSearchResponse>({
      query: new SearchEndpointQuery({
        keywords: input,
      }),
    });

    if (!data) {
      return {
        bestMatches: [],
      };
    }

    const parser = new SearchParser();
    return parser.Parse(data);
  }

  public static async GetQuote(input: string): Promise<QuoteResponse> {
    const data = await AlphaVantageClient.Request<RawQuoteResponse>({
      query: new QuoteEndpointQuery({
        symbol: input,
      }),
    });

    if (!data) {
      return {
        data: {},
      };
    }

    const parser = new QuoteParser();
    return parser.Parse(data);
  }
}
