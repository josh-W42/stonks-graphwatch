import { mergeTypeDefs } from "@graphql-tools/merge";
import { quoteDefs } from "./quote";
import { searchDefs } from "./search";
import { dailyDefs } from "./time_daily/schema";

export const typeDefs = mergeTypeDefs([searchDefs, quoteDefs, dailyDefs]);
