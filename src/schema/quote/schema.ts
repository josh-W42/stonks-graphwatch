import { gql } from 'apollo-server-express';

export const quoteDefs = [
  gql`
    type Quote {
      symbol: String!
      open: String!
      high: String!
      low: String!
      price: String!
      volume: String!
      latestTradingDay: String!
      previousClose: String!
      change: String!
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
