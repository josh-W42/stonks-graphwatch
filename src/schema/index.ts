import { mergeTypeDefs } from '@graphql-tools/merge';
import { searchDefs } from './search';
import { testsDef } from './tests';

export const typeDefs = mergeTypeDefs([testsDef, searchDefs]);
