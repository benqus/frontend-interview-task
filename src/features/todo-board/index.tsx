import { FragmentType, getFragmentData, graphql } from "@/lib/gql";
import { Status } from "@/lib/gql/graphql";

import { Card } from "./Card";
import { Column } from "./Column";
import styles from "./styles.module.css";

const fragment = graphql(`
  fragment Job on Job {
    id
    status
    ...JobCard
  }
`);

export function TodoBoard({
  jobs: jobsParam,
}: {
  jobs: readonly FragmentType<typeof fragment>[];
}) {
  const jobs = getFragmentData(fragment, jobsParam);

  return (
    <div className={styles.container}>
      <Column name="To Do">
        {jobs
          .filter((it) => it.status === Status.ToDo)
          .map((it) => (
            <Card job={it} key={it.id} />
          ))}
      </Column>
      <Column name="In Progress">
        {jobs
          .filter((it) => it.status === Status.InProgress)
          .map((it) => (
            <Card job={it} key={it.id} />
          ))}
      </Column>
      <Column name="Done">
        {jobs
          .filter((it) => it.status === Status.Done)
          .map((it) => (
            <Card job={it} key={it.id} />
          ))}
      </Column>
    </div>
  );
}
