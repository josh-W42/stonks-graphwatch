// Resolvers define the technique for fetching the types defined in the

import { QuoteResponse } from '../../clients/alphaVantage/models';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  symbol: string;
}

// schema.
export const quote = {
  Query: {
    async GetQuoteGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<QuoteResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetQuote(args.symbol);
      }
    },
  },
};
