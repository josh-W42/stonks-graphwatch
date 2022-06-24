import { mergeResolvers } from '@graphql-tools/merge';
import { quote } from './quote';
import { search } from './search';
import { books } from './tests/indext';

export const resolvers = mergeResolvers([books, search, quote]);
