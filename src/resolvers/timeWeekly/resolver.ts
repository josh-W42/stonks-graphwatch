import { WeeklyResponse } from '../../clients/alphaVantage/models/time_weekly';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  symbol: string;
}

export const weekly = {
  Query: {
    /**
     * Resolver for the GraphQL query used to get weekly records (20+ years worth) for a global token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetWeeklyRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<WeeklyResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetWeeklyRecords(args.symbol);
      }
    },
  },
};
