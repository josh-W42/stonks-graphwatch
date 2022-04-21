import { mergeTypeDefs } from '@graphql-tools/merge';
import { testsDef } from './tests';

export const typeDefs = mergeTypeDefs(testsDef);
