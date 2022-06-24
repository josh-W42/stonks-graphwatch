import { mergeTypeDefs } from '@graphql-tools/merge';
import { quoteDefs } from './quote';
import { searchDefs } from './search';
import { testsDef } from './tests';

export const typeDefs = mergeTypeDefs([testsDef, searchDefs, quoteDefs]);
