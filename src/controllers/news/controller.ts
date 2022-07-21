import { UserInputError } from 'apollo-server-core';
import { AlphaVantageClient } from '../../clients';
import { NewsResponse } from '../../clients/alphaVantage/models/news';
import { NewsSentimentQuery } from '../../clients/alphaVantage/queries/newsSentiment';
import { INewsArgs } from '../../resolvers/news';

export class NewsController {
  /**
   * Static method that uses the AlphaVantage client to retrieve news with sentiment analysis.
   *
   * @param {INewsArgs} - A collection of arguments used to construct a query.
   * @returns A promise that resolves to a NewsResponse.
   */
  public static async GetNews({
    tickers,
    topics,
    time_from,
    time_to,
    sort,
    limit,
  }: INewsArgs): Promise<NewsResponse> {
    const data = await AlphaVantageClient.Request<NewsResponse>({
      query: new NewsSentimentQuery({
        tickers,
        topics,
        time_from,
        time_to,
        sort,
        limit,
      }),
    });

    if (!data) {
      throw new UserInputError('No Data Found!');
    }

    return data;
  }
}
