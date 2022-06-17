// Resolvers define the technique for fetching the types defined in the

import { StockController } from '../../controllers/stocks/index';
import { SearchResponse } from '../../controllers/stocks/models';

interface ISearchArgs {
  input: string;
}

// schema.
export const search = {
  Query: {
    async GetStocksGQL(_: unknown, args: ISearchArgs): Promise<SearchResponse> {
      return await StockController.GetStocks(args.input);
    },
  },
};
