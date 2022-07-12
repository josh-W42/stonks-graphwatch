import { gql } from 'apollo-server-express';

export const dailyDefs = [
  gql`
    type DailyMetaData {
      about: String!
      symbol: String!
      lastRefreshed: String!
      outputSizeType: String!
      timeZone: String!
    }

    type DailyRecord {
      date: String!
      open: Float!
      high: Float!
      low: Float!
      close: Float!
      volume: Int!
    }

    type DailyResponse {
      metadata: DailyMetaData
      records: [DailyRecord]!
    }

    type Query {
      GetDailyRecordsGQL(symbol: String): DailyResponse
    }
  `,
];
