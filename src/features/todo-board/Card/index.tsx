import { DateTime } from "luxon";

import { FragmentType, getFragmentData, graphql } from "@/lib/gql";

import styles from "./styles.module.css";

const fragment = graphql(`
  fragment JobCard on Job {
    id
    name
    status
    createdAt
  }
`);

export function Card({
  job: jobParam,
}: {
  job: FragmentType<typeof fragment>;
}) {
  const { status, name, createdAt } = getFragmentData(fragment, jobParam);
  return (
    <article className={styles.container}>
      <h1 className={styles.title} title={name}>
        {name}
      </h1>
      <div className={styles.subtitle}>
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(DateTime.fromISO(createdAt).toJSDate())}
      </div>
      <div>{status}</div>
    </article>
  );
}
