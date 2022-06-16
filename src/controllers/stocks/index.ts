import { SearchStockResponse } from './models';
import dotenv from 'dotenv';

dotenv.config();
const APIKEY = process.env.ALPHA_VANTAGE_API_KEY;

export class StockController {
  public static GetStocks(): SearchStockResponse {
    console.log(APIKEY);
    return {
      bestMatches: [
        {
          name: 'IBM',
          symbol: 'ICBM',
          type: 'Equity',
          region: 'United States',
          marketOpen: '09:30',
          marketClose: '16:00',
          timezone: 'UTC-04',
          currency: 'USD',
          matchScore: '1.0000',
        },
      ],
    };
  }
}
