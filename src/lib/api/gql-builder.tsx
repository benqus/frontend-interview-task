import SchemaBuilder from "@pothos/core";
import { DateTimeResolver } from "graphql-scalars";
import { DateTime } from "luxon";

import { JobInternal, getJobList } from "./data";

export const builder = new SchemaBuilder<{
  Scalars: {
    DateTime: {
      Input: string | Date;
      Output: Date;
    };
  };
}>({});

builder.addScalarType("DateTime", DateTimeResolver, {});

const Status = builder.enumType("Status", {
  values: ["TO_DO", "IN_PROGRESS", "DONE"],
});

const Job = builder.objectRef<JobInternal>("Job");

builder.objectType(Job, {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    name: t.exposeString("name"),
    status: t.field({
      type: Status,
      resolve: (it) => {
        const now = DateTime.utc();
        if (now.diff(DateTime.fromJSDate(it.doneAt)).toMillis() > 0) {
          return "DONE";
        }

        if (now.diff(DateTime.fromJSDate(it.inProgressAt)).toMillis() > 0) {
          return "IN_PROGRESS";
        }

        return "TO_DO";
      },
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    jobs: t.field({
      type: t.listRef(Job),
      resolve: () => {
        return getJobList();
      },
    }),
  }),
});
