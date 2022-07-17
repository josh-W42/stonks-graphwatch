import { gql } from 'apollo-server-express';

export const monthlyDefs = [
  gql`
    type MonthlyMetaData {
      about: String!
      symbol: String!
      lastRefreshed: String!
      timeZone: String!
    }

    type MonthlyRecord {
      date: String!
      open: Float!
      high: Float!
      low: Float!
      close: Float!
      volume: Int!
    }

    type MonthlyResponse {
      metadata: MonthlyMetaData
      records: [MonthlyRecord]!
    }

    type Query {
      GetMonthlyRecordsGQL(symbol: String): MonthlyResponse
    }
  `,
];
