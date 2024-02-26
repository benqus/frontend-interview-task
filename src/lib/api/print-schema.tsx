import fs from "node:fs";
import path from "node:path";

import { printSchema, lexicographicSortSchema } from "graphql";

import { builder } from "./gql-builder";

const schema = builder.toSchema();
const schemaAsString = printSchema(lexicographicSortSchema(schema));

fs.writeFileSync(path.join(process.cwd(), "schema.graphql"), schemaAsString);
