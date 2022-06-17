import axios from 'axios';
import dotenv from 'dotenv';
import { BaseQuery } from './queries';

dotenv.config();

interface IRequestConfig {
  query: BaseQuery;
}

export class AlphaVantageClient {
  public static async Request<T>({ query }: IRequestConfig): Promise<T> {
    const url = query.URL;
    console.log(query.params);

    const response = await axios(url);
    console.log(
      `GET: ${query.params?.function} [${response.statusText} : ${response.status}]`
    );

    return response.data;
  }
}
