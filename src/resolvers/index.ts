import { mergeResolvers } from "@graphql-tools/merge";
import { quote } from "./quote";
import { search } from "./search";
import { daily } from "./time_daily";

export const resolvers = mergeResolvers([search, quote, daily]);
