import { QueryFunctionTypes, ResponseDataType } from '../../types';
import { BaseQuery, IBaseQueryParams } from '../base';

export interface IQuoteParams extends IBaseQueryParams {
  symbol: string;
  datatype?: ResponseDataType;
}

export class QuoteEndpointQuery extends BaseQuery {
  constructor(params: IQuoteParams) {
    super({
      function: QueryFunctionTypes.Quote,
      datatype: 'json',
      ...params,
    });
  }
}
