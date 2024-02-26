import { TodoBoard } from "@/features/todo-board";
import { graphql } from "@/lib/gql";
import { gqlClient } from "@/lib/gql-client/server";

const query = graphql(`
  query Jobs {
    jobs {
      ...Job
    }
  }
`);

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const data = await gqlClient.request(query);
  return <TodoBoard jobs={data.jobs} />;
}
