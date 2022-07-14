import { mergeResolvers } from '@graphql-tools/merge';
import { quote } from './quote';
import { search } from './search';
import { weekly } from './timeWeekly';
import { daily } from './time_daily';
import { intraDay } from './time_intraDay';

export const resolvers = mergeResolvers([
  search,
  quote,
  daily,
  weekly,
  intraDay,
]);
