"use client";

import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as OriginalApolloProvider,
  from,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { Env } from "@/lib/env";
import { logger as globalLogger } from "@/lib/logger";

const logger = globalLogger.child({ scope: "browser/gql-client" });

const buildLink = (): ApolloLink => {
  return from([
    onError((error) => {
      logger.error({ ...error }, "GQL error");
    }),

    new HttpLink({ uri: Env.gql.endpoint }),
  ]);
};

const apolloClient = new ApolloClient({
  link: buildLink(),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
      canonizeResults: true,
      fetchPolicy: "cache-and-network",
      returnPartialData: true,
    },
  },
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <OriginalApolloProvider client={apolloClient}>
      {children}
    </OriginalApolloProvider>
  );
};
