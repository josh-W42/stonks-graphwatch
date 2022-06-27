import { mergeTypeDefs } from "@graphql-tools/merge";
import { quoteDefs } from "./quote";
import { searchDefs } from "./search";
import { dailyDefs } from "./time_daily/schema";
import { weeklyDefs } from "./time_weekly";

export const typeDefs = mergeTypeDefs([
  searchDefs,
  quoteDefs,
  dailyDefs,
  weeklyDefs,
]);
