// Resolvers define the technique for fetching the types defined in the

import { SearchResponse } from '../../clients/alphaVantage/models';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  input: string;
}

// schema.
export const search = {
  Query: {
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
