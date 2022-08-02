import { gql } from 'apollo-server-express';

export const newsDefs = [
  gql`
    type Topic {
      topic: String!
      relevance_score: Float!
    }

    type TickerRef {
      ticker: String!
      relevance_score: Float!
      ticker_sentiment_score: Float!
      ticker_sentiment_label: String!
    }

    type Article {
      title: String!
      url: String!
      time_published: String!
      authors: [String!]!
      summary: String!
      banner_image: String
      source: String!
      category_within_source: String!
      source_domain: String!
      topics: [Topic]!
      overall_sentiment_score: Float!
      overall_sentiment_label: String!
      ticker_sentiment: [TickerRef]!
    }

    type NewsResponse {
      items: Int!
      sentiment_score_definition: String!
      relevance_score_definition: String!
      feed: [Article]!
    }

    type Query {
      GetNewsGQL(
        tickers: [String]
        topics: [String]
        time_from: String
        time_to: String
        sort: String
        limit: Int
      ): NewsResponse
    }
  `,
];
