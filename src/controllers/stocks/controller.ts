import { AlphaVantageClient } from '../../clients/alphaVantage';
import {
  QuoteResponse,
  RawQuoteResponse,
  RawSearchResponse,
  SearchResponse,
  DailyResponse,
  RawDailyResponse,
  IntraDayIntervalTypes,
  IntraDayResponse,
  RawIntraDayResponse,
  RawWeeklyResponse,
  WeeklyResponse,
  MonthlyResponse,
  RawMonthlyResponse,
} from '../../clients/alphaVantage/models';
import {
  QuoteParser,
  SearchParser,
  DailyParser,
  WeeklyParser,
  IntraDayParser,
  MonthlyParser,
} from '../../clients/alphaVantage/parsers';
import {
  QuoteEndpointQuery,
  SearchEndpointQuery,
  DailyEndpointQuery,
  IntraDayEndpointQuery,
  WeeklyEndpointQuery,
  MonthlyEndpointQuery,
} from '../../clients/alphaVantage/queries';

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
        symbol,
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
        symbol,
      }),
    });

    if (!data) {
      return {};
    }

    const parser = new DailyParser();
    return parser.Parse(data);
  }

  /**
   * Static method that uses the AlphaVantage client to retrieve
   * weekly records for a single symbol.
   *
   * Retrieves 20+ years of data.
   *
   * @param symbol - The symbol of a global token.
   * @returns A promise that resolves to a WeeklyResponse.
   */
  public static async GetWeeklyRecords(
    symbol: string
  ): Promise<WeeklyResponse> {
    const data = await AlphaVantageClient.Request<RawWeeklyResponse>({
      query: new WeeklyEndpointQuery({
        symbol,
      }),
    });

    if (!data) {
      return {};
    }

    const parser = new WeeklyParser();
    return parser.Parse(data);
  }

  /**
   * Static method that uses the AlphaVantage client to retrieve
   * IntraDay records for a single symbol.
   *
   * Currently, we use the 'compact' setting for outputsize;
   * this allows us to take the latest 100 data points.
   *
   * @param symbol - The symbol of a global token.
   * @param interval - One of the time interval types available from the API.
   * @returns
   */
  public static async GetIntraDayRecords(
    symbol: string,
    interval: IntraDayIntervalTypes
  ): Promise<IntraDayResponse> {
    const data = await AlphaVantageClient.Request<RawIntraDayResponse>({
      query: new IntraDayEndpointQuery({
        symbol,
        interval,
      }),
    });

    if (!data) {
      return {};
    }

    const parser = new IntraDayParser();
    return parser.Parse(data);
  }

  /**
   * Static method that uses the AlphaVantage client to retrieve
   * Monthly records for a single symbol.
   *
   * Retrieves 20+ years of data.
   *
   * @param symbol
   * @returns
   */
  public static async GetMonthlyRecords(
    symbol: string
  ): Promise<MonthlyResponse> {
    const data = await AlphaVantageClient.Request<RawMonthlyResponse>({
      query: new MonthlyEndpointQuery({
        symbol,
      }),
    });

    if (!data) {
      return {};
    }

    const parser = new MonthlyParser();
    return parser.Parse(data);
  }
}
