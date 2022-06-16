// Resolvers define the technique for fetching the types defined in the

import { StockController } from '../../controllers/stocks/index';
import { SearchStockResponse } from '../../controllers/stocks/models';

// schema.
export const search = {
  Query: {
    GetStocksGQL(): SearchStockResponse {
      return StockController.GetStocks();
    },
  },
};
