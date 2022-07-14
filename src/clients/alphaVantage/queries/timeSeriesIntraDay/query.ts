import { IntraDayIntervalTypes } from '../../models/';
import {
  OutputSizeTypes,
  QueryFunctionTypes,
  ResponseDataType,
} from '../../types';
import { BaseQuery, IBaseQueryParams } from '../base';

export interface IIntraDayParams extends IBaseQueryParams {
  symbol: string;
  interval: IntraDayIntervalTypes;
  datatype?: ResponseDataType;
  adjusted?: boolean;
  outputsize?: OutputSizeTypes;
}

/**
 * Concrete query class related to the Time Series IntraDay Endpoint from the AlphaVantage API.
 */
export class IntraDayEndpointQuery extends BaseQuery {
  constructor(params: IIntraDayParams) {
    super({
      function: QueryFunctionTypes.IntraDay,
      datatype: 'json',
      outputsize: 'compact',
      ...params,
    });
  }
}
