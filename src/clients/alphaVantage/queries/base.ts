import { QueryFunctionTypes } from '../types';
import dotenv from 'dotenv';

dotenv.config();

export interface IBaseQueryParams {
  readonly function?: QueryFunctionTypes;
}

/**
 * An abstract class that all query classes will extend from.
 *
 * The goal of a Query class is to create an appropriate URL for the AlphaVantage client.
 */
export abstract class BaseQuery {
  protected _apikey = process.env.ALPHA_VANTAGE_API_KEY;
  protected _baseURL = `https://www.alphavantage.co/query?apikey=${this._apikey}`;
  protected _url: string;
  protected _params: IBaseQueryParams;

  constructor(params: IBaseQueryParams) {
    this._params = params;
    this._url = this._BuildURL(params);
  }

  get URL(): string {
    return this._url;
  }

  get params(): IBaseQueryParams | undefined {
    return this._params;
  }

  protected _BuildURL(params: IBaseQueryParams): string {
    const output: string[] = [this._baseURL];
    for (const [param, value] of Object.entries(params)) {
      if (value) {
        if (Array.isArray(value)) {
          output.push(`${param}=${value.join(',')}`);
        } else {
          output.push(`${param}=${value}`);
        }
      }
    }

    return output.join('&');
  }
}
