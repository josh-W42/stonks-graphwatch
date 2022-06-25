import { QueryFunctionTypes, ResponseDataType } from '../../types';
import { BaseQuery, IBaseQueryParams } from '../base';

export interface IQuoteParams extends IBaseQueryParams {
  symbol: string;
  datatype?: ResponseDataType;
}

/**
 * Concrete query class related to the Quote Endpoint from the AlphaVantage API.
 */
export class QuoteEndpointQuery extends BaseQuery {
  constructor(params: IQuoteParams) {
    super({
      function: QueryFunctionTypes.Quote,
      datatype: 'json',
      ...params,
    });
  }
}
