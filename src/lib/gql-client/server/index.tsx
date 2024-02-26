import "server-only";

import { GraphQLClient } from "graphql-request";

import { Env } from "@/lib/env";

export const gqlClient = new GraphQLClient(Env.gql.endpoint);
