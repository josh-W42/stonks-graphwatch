export interface Topic {
  topic: string;
  relevance_score: number;
}

export interface TickerRef {
  ticker: string;
  relevance_score: number;
  ticker_sentiment_score: number;
  ticker_sentiment_label: string;
}

export interface Article {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: string;
  source: string;
  category_within_source: string;
  source_domain: string;
  topics: Topic[];
  overall_sentiment_score: number;
  overall_sentiment_label: number;
  ticker_sentiment: TickerRef[];
}

export interface NewsResponse {
  items: number;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed: Article[];
}
