export const enum QueryFunctionTypes {
  'Search' = 'SYMBOL_SEARCH',
  'Quote' = 'GLOBAL_QUOTE',
  'Daily' = 'TIME_SERIES_DAILY',
}

export type ResponseDataType = 'json' | 'csv';
