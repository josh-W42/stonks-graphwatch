import { gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const searchDefs = [
  gql`
    type MatchStock {
      symbol: String!
      name: String!
      type: String!
      region: String!
      marketOpen: String!
      marketClose: String!
      timezone: String!
      currency: String!
      matchScore: String!
    }

    type SearchStockResponse {
      bestMatches: [MatchStock]!
    }

    type Query {
      GetStocksGQL: SearchStockResponse
    }
  `,
];
