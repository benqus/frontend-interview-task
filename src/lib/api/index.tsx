import { createYoga } from "graphql-yoga";

import { builder } from "./gql-builder";
import { seedMoreJobs } from "./data";

export const gqlServer = createYoga({
  logging: true,
  context: (initialContext) => {
    seedMoreJobs();
    return initialContext;
  },
  schema: builder.toSchema(),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});
