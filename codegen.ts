import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  ignoreNoDocuments: true,
  generates: {
    "./src/lib/gql/": {
      documents: ["src/**/*.(tsx|ts)"],
      preset: "client",
      presetConfig: {
        persistedDocuments: true,
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      config: {
        skipTypename: true,
        strictScalars: true,
        scalars: {
          DateTime: "string",
        },
      },
    },
  },
};

export default config;
