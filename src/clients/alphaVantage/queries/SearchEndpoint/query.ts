import { QueryFunctionTypes, ResponseDataType } from '../../types';
import { BaseQuery, IBaseQueryParams } from '../base';

export interface ISearchParams extends IBaseQueryParams {
  keywords: string;
  datatype?: ResponseDataType;
}

export class SearchEndpointQuery extends BaseQuery {
  constructor(params: ISearchParams) {
    super({
      function: QueryFunctionTypes.Search,
      datatype: 'json',
      ...params,
    });
  }
}
