import axios, { AxiosError } from 'axios';
import { BaseQuery } from './queries';

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
        throw new AxiosError(response.data['Error Message'], '400');
      }

      if (response.data['Note']) {
        throw new AxiosError(
          `Too Many Requests: ${response.data['Note']}`,
          '429'
        );
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
