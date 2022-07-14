export const enum QueryFunctionTypes {
  'Search' = 'SYMBOL_SEARCH',
  'Quote' = 'GLOBAL_QUOTE',
  'Daily' = 'TIME_SERIES_DAILY',
  'Weekly' = 'TIME_SERIES_WEEKLY',
  'IntraDay' = 'TIME_SERIES_INTRADAY',
}

export type ResponseDataType = 'json' | 'csv';

export type OutputSizeTypes = 'compact' | 'full';
