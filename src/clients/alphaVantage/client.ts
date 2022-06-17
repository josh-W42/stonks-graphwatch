import axios from 'axios';
import dotenv from 'dotenv';
import { BaseQuery } from './queries';

dotenv.config();

interface IRequestConfig {
  query: BaseQuery;
}

export class AlphaVantageClient {
  public static async Request<T>({
    query,
  }: IRequestConfig): Promise<T | undefined> {
    const url = query.URL;

    try {
      const response = await axios(url);
      if (response.data['Error Message']) {
        throw new Error(response.data['Error Message']);
      }

      console.log(
        `GET: ${query.params?.function} [${response.statusText} : ${response.status}]`
      );
      return response.data;
    } catch (error) {
      console.log(`GET ERROR: ${query.params?.function}: [${error}]`);
      return undefined;
    }
  }
}
