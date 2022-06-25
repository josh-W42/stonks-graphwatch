// Resolvers define the technique for fetching the types defined in the

import { SearchResponse } from '../../clients/alphaVantage/models';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  input: string;
}

export const search = {
  Query: {
    /**
     * Resolver for the GraphQL query used to search for token.
     * Input can a whole / partial symbol or a whole / partial name of an token.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetStocksGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<SearchResponse | undefined> {
      if (args.input) {
        return await StockController.GetStocks(args.input);
      }
    },
  },
};
