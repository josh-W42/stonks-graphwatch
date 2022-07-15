import axios, { AxiosError } from 'axios';
import { sleep } from '../../helpers';
import { BaseQuery } from './queries';

interface IRequestConfig {
  query: BaseQuery;
}

/**
 * A client that is used to fetch data from the AlphaVantage API
 */
export class AlphaVantageClient {
  /**
   * Static method used to retrieve data of type T.
   * @param IRequestConfig.query - A class that must extend from the BaseQuery class that will handle generating appropriate URLs.
   * @returns Data of type T or undefined upon error.
   */
  public static async Request<T>({
    query,
  }: IRequestConfig): Promise<T | undefined> {
    const url = query.URL;

    let receivedData = false;
    while (!receivedData) {
      try {
        console.log('Attempting to access AV API...');
        const response = await axios(url);

        if (response.data['Error Message']) {
          // There was an error.
          throw new AxiosError(response.data['Error Message'], '400');
        }

        if (response.data['Note']) {
          // Too many Requests
          console.log(
            `Warning: API Request Limit Reached: ${query.params?.function}: [${response.data['Note']}]`
          );
          await sleep(60_000);
          continue;
        }

        // We've received the data we need.
        receivedData = true;
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
}
