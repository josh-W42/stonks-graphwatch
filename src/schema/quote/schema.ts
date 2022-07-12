import { gql } from 'apollo-server-express';

export const quoteDefs = [
  gql`
    type Quote {
      symbol: String!
      open: Float!
      high: Float!
      low: Float!
      price: Float!
      volume: Int!
      latestTradingDay: String!
      previousClose: Float!
      change: Float!
      changePercent: String!
    }

    type QuoteResponse {
      data: Quote!
    }

    type Query {
      GetQuoteGQL(symbol: String): QuoteResponse
    }
  `,
];
