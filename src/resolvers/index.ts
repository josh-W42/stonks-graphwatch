import { mergeResolvers } from '@graphql-tools/merge';
import { books } from './tests/indext';

export const resolvers = mergeResolvers(books);
