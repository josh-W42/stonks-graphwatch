import { NewsResponse } from '../../clients/alphaVantage/models/news';
import { NewsValidator } from '../../clients/alphaVantage/validators';
import { NewsController } from '../../controllers/news';

export interface INewsArgs {
  tickers?: string[];
  topics?: string[];
  time_from?: string;
  time_to?: string;
  sort?: string;
  limit?: number;
}

// schema.
export const news = {
  Query: {
    /**
     * Resolver for the GraphQL query used to get a quote for single token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetNewsGQL(
      _: unknown,
      args: INewsArgs
    ): Promise<NewsResponse | undefined> {
      NewsValidator.Validate(args);
      return NewsController.GetNews(args);
    },
  },
};
