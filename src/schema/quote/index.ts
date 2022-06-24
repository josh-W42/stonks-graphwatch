import { gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
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
      GetQuoteGQL(input: String): QuoteResponse
    }
  `,
];
