import { gql } from 'apollo-server-express';

export const weeklyDefs = [
  gql`
    type WeeklyMetaData {
      about: String!
      symbol: String!
      lastRefreshed: String!
      timeZone: String!
    }

    type WeeklyRecord {
      week: String!
      open: Float!
      high: Float!
      low: Float!
      close: Float!
      volume: Int!
    }

    type WeeklyResponse {
      metadata: WeeklyMetaData
      records: [WeeklyRecord]!
    }

    type Query {
      GetWeeklyRecordsGQL(symbol: String): WeeklyResponse
    }
  `,
];
