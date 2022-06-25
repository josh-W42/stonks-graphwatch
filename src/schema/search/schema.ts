import { gql } from 'apollo-server-express';

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
      GetStocksGQL(input: String): SearchStockResponse
    }
  `,
];
