// Resolvers define the technique for fetching the types defined in the

import { QuoteResponse } from '../../clients/alphaVantage/models';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  symbol: string;
}

// schema.
export const quote = {
  Query: {
    /**
     * Resolver for the GraphQL query used to get a quote for single token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
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
