export const Env = {
  gql: {
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
  },
};

if (!Env.gql.endpoint) {
  throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set");
}
