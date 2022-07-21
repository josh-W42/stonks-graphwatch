import { QueryFunctionTypes } from '../../types';
import { BaseQuery, IBaseQueryParams } from '../base';

export interface INewsParams extends IBaseQueryParams {
  tickers?: string[];
  topics?: string[];
  time_from?: string;
  time_to?: string;
  sort?: string;
  limit?: number;
}

/**
 * Concrete query class related to the News Sentiment Endpoint from the AlphaVantage API.
 */
export class NewsSentimentQuery extends BaseQuery {
  constructor(params: INewsParams) {
    super({
      function: QueryFunctionTypes.News,
      ...params,
    });
  }
}
