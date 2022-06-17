import { QueryFunctionTypes } from '../../types';
import { BaseQuery, IBaseQueryParams } from '../base';

export interface ISearchParams extends IBaseQueryParams {
  keywords: string;
  datatype?: ResponseDataType;
}

type ResponseDataType = 'json' | 'csv';

export class SearchEndpointQuery extends BaseQuery {
  constructor(params: ISearchParams) {
    super({
      function: QueryFunctionTypes.Search,
      datatype: 'json',
      ...params,
    });
  }

  protected _BuildURL(): string {
    const output: string[] = [this._baseURL];
    for (const [param, value] of Object.entries(this._params)) {
      output.push(`${param}=${value}`);
    }

    return output.join('&');
  }
}
