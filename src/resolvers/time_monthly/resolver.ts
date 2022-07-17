import { DailyResponse } from '../../clients/alphaVantage/models/time_daily';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  symbol: string;
}

export const monthly = {
  Query: {
    /**
     * Resolver for the GraphQL query used to get monthly records (20+ years worth) for a global token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetMonthlyRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<DailyResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetMonthlyRecords(args.symbol);
      }
    },
  },
};
