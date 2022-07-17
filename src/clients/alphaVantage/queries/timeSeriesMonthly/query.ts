import { QueryFunctionTypes, ResponseDataType } from '../../types';
import { BaseQuery, IBaseQueryParams } from '../base';

export interface IMonthlyParams extends IBaseQueryParams {
  symbol: string;
  datatype?: ResponseDataType;
}

/**
 * Concrete query class related to the Time Series Monthly Endpoint from the AlphaVantage API.
 */
export class MonthlyEndpointQuery extends BaseQuery {
  constructor(params: IMonthlyParams) {
    super({
      function: QueryFunctionTypes.Monthly,
      datatype: 'json',
      ...params,
    });
  }
}
