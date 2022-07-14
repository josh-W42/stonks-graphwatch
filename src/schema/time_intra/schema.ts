import { gql } from 'apollo-server-express';

export const intraDayDefs = [
  gql`
    type IntraDayMetaData {
      about: String!
      symbol: String!
      lastRefreshed: String!
      interval: String!
      outputSizeType: String!
      timeZone: String!
    }

    type IntraDayRecord {
      date: String!
      open: Float!
      high: Float!
      low: Float!
      close: Float!
      volume: Int!
    }

    type IntraDayResponse {
      metadata: IntraDayMetaData
      records: [IntraDayRecord]!
    }

    type Query {
      GetOneMinRecordsGQL(symbol: String): IntraDayResponse
      GetFiveMinRecordsGQL(symbol: String): IntraDayResponse
      GetFifteenMinRecordsGQL(symbol: String): IntraDayResponse
      GetThirtyMinRecordsGQL(symbol: String): IntraDayResponse
      GetHourRecordsGQL(symbol: String): IntraDayResponse
    }
  `,
];
