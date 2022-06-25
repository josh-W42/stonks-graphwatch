import { AlphaVantageClient } from "../../clients/alphaVantage";
import {
  QuoteResponse,
  RawQuoteResponse,
  RawSearchResponse,
  SearchResponse,
  DailyResponse,
  RawDailyResponse,
} from "../../clients/alphaVantage/models";
import {
  QuoteParser,
  SearchParser,
  DailyParser,
} from "../../clients/alphaVantage/parsers";
import {
  QuoteEndpointQuery,
  SearchEndpointQuery,
  DailyEndpointQuery,
} from "../../clients/alphaVantage/queries";

/**
 * A controller that houses static methods that retrieve data the AlphaVantage client.
 */
export class StockController {
  /**
   * Static method that uses the AlphaVantage client to retrieve tokens with names or symbols
   * closely related to the given input.
   *
   * Returns an empty SearchResponse upon error.
   * @param input - Either a whole / partial symbol or a whole / partial name of an token.
   * @returns A promise that resolves to a SearchResponse.
   */
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

  /**
   * Static method that uses the AlphaVantage client to retrieve tokens with symbols
   * that exactly match the symbol input.
   *
   * Returns an empty QuoteResponse upon error.
   * @param symbol - The symbol of a global token.
   * @returns A promise that resolves to a QuoteResponse.
   */
  public static async GetQuote(symbol: string): Promise<QuoteResponse> {
    const data = await AlphaVantageClient.Request<RawQuoteResponse>({
      query: new QuoteEndpointQuery({
        symbol: symbol,
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

  /**
   * Static method that uses the AlphaVantage client to retrieve
   * daily records for a single symbol.
   *
   * Retrieves the latest 100 data points (100 days) for the symbol.
   *
   * Returns an empty DailyResponse upon error.
   * @param symbol - The symbol of a global token.
   * @returns A promise that resolves to a DailyResponse.
   */
  public static async GetDailyRecords(symbol: string): Promise<DailyResponse> {
    const data = await AlphaVantageClient.Request<RawDailyResponse>({
      query: new DailyEndpointQuery({
        symbol: symbol,
      }),
    });

    if (!data) {
      return {};
    }

    const parser = new DailyParser();
    return parser.Parse(data);
  }
}
