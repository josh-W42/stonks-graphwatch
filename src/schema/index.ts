import { mergeTypeDefs } from '@graphql-tools/merge';
import { newsDefs } from './news';
import { quoteDefs } from './quote';
import { searchDefs } from './search';
import { dailyDefs } from './time_daily/schema';
import { intraDayDefs } from './time_intra';
import { monthlyDefs } from './time_monthly';
import { weeklyDefs } from './time_weekly';

export const typeDefs = mergeTypeDefs([
  searchDefs,
  quoteDefs,
  dailyDefs,
  weeklyDefs,
  intraDayDefs,
  monthlyDefs,
  newsDefs,
]);
