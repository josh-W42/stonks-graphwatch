import { QueryFunctionTypes, ResponseDataType } from "../../types";
import { BaseQuery, IBaseQueryParams } from "../base";

export interface IDailyParams extends IBaseQueryParams {
  symbol: string;
  datatype?: ResponseDataType;
  outputsize?: string;
}

/**
 * Concrete query class related to the Time Series Daily Endpoint from the AlphaVantage API.
 */
export class DailyEndpointQuery extends BaseQuery {
  constructor(params: IDailyParams) {
    super({
      function: QueryFunctionTypes.Daily,
      datatype: "json",
      outputsize: "compact",
      ...params,
    });
  }
}
