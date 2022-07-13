import { DailyResponse } from '../../clients/alphaVantage/models/time_daily';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  symbol: string;
}

export const daily = {
  Query: {
    /**
     * Resolver for the GraphQL query used to get the latest 100 daily records.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetDailyRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<DailyResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetDailyRecords(args.symbol);
      }
    },
  },
};
