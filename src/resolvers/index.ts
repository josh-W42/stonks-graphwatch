import { mergeResolvers } from '@graphql-tools/merge';
import { news } from './news';
import { quote } from './quote';
import { search } from './search';
import { weekly } from './timeWeekly';
import { daily } from './time_daily';
import { intraDay } from './time_intraDay';
import { monthly } from './time_monthly';

export const resolvers = mergeResolvers([
  search,
  quote,
  daily,
  weekly,
  intraDay,
  monthly,
  news,
]);
