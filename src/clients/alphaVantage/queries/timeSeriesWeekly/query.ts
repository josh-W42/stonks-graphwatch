import { QueryFunctionTypes, ResponseDataType } from "../../types";
import { BaseQuery, IBaseQueryParams } from "../base";

export interface IWeeklyParams extends IBaseQueryParams {
  symbol: string;
  datatype?: ResponseDataType;
}

/**
 * Concrete query class related to the Time Series Weekly Endpoint from the AlphaVantage API.
 */
export class WeeklyEndpointQuery extends BaseQuery {
  constructor(params: IWeeklyParams) {
    super({
      function: QueryFunctionTypes.Weekly,
      datatype: "json",
      ...params,
    });
  }
}
