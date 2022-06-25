import { mergeTypeDefs } from '@graphql-tools/merge';
import { quoteDefs } from './quote';
import { searchDefs } from './search';

export const typeDefs = mergeTypeDefs([searchDefs, quoteDefs]);
