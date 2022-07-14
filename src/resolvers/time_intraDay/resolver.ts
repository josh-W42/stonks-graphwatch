import {
  IntraDayIntervalTypes,
  IntraDayResponse,
} from '../../clients/alphaVantage/models/time_intraDay';
import { StockController } from '../../controllers/stocks/index';

interface ISearchArgs {
  symbol: string;
}

export const intraDay = {
  Query: {
    /**
     * Resolver for the GraphQL query used to get 1 minute interval records for a global token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetOneMinRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<IntraDayResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetIntraDayRecords(
          args.symbol,
          IntraDayIntervalTypes['1min']
        );
      }
    },
    /**
     * Resolver for the GraphQL query used to get 5 minute interval records for a global token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetFiveMinRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<IntraDayResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetIntraDayRecords(
          args.symbol,
          IntraDayIntervalTypes['5min']
        );
      }
    },
    /**
     * Resolver for the GraphQL query used to get 15 minute interval records for a global token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetFifteenMinRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<IntraDayResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetIntraDayRecords(
          args.symbol,
          IntraDayIntervalTypes['15min']
        );
      }
    },
    /**
     * Resolver for the GraphQL query used to get 30 minute interval records for a global token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetThirtyMinRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<IntraDayResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetIntraDayRecords(
          args.symbol,
          IntraDayIntervalTypes['30min']
        );
      }
    },
    /**
     * Resolver for the GraphQL query used to get hourly interval records for a global token.
     * Input must exactly match a token's symbol.
     * @param _ - Unused. From GraphQL Docs: The return value of the resolver for this field's parent.
     * @param args - From GraphQL Docs: An object that contains all GraphQL arguments provided for this field.
     */
    async GetHourRecordsGQL(
      _: unknown,
      args: ISearchArgs
    ): Promise<IntraDayResponse | undefined> {
      if (args.symbol) {
        return await StockController.GetIntraDayRecords(
          args.symbol,
          IntraDayIntervalTypes['60min']
        );
      }
    },
  },
};
