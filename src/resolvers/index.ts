import { mergeResolvers } from '@graphql-tools/merge';
import { quote } from './quote';
import { search } from './search';

export const resolvers = mergeResolvers([search, quote]);
