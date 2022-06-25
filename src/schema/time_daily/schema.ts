import { gql } from "apollo-server-express";

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
      open: String!
      high: String!
      low: String!
      close: String!
      volume: String!
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
