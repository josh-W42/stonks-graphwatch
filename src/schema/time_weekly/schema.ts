import { gql } from "apollo-server-express";

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
      open: String!
      high: String!
      low: String!
      close: String!
      volume: String!
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
