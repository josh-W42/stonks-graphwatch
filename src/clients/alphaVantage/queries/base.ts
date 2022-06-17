import { QueryFunctionTypes } from '../types';
import dotenv from 'dotenv';

dotenv.config();

export interface IBaseQueryParams {
  readonly function?: QueryFunctionTypes;
}

export abstract class BaseQuery {
  protected _apikey = process.env.ALPHA_VANTAGE_API_KEY;
  protected _baseURL = `https://www.alphavantage.co/query?apikey=${this._apikey}`;
  protected _url: string;
  protected _params: IBaseQueryParams;

  constructor(params: IBaseQueryParams) {
    // Params must be intialized before calling BuildURL.
    this._params = params;
    this._url = this._BuildURL();
  }

  get URL(): string {
    return this._url;
  }

  get params(): IBaseQueryParams | undefined {
    return this._params;
  }

  protected abstract _BuildURL(): string;
}
