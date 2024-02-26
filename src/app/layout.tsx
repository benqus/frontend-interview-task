import { ApolloProvider } from "@/lib/gql-client/browser";

import "@/lib/styles/themes.css";
import "@/lib/styles/global.css";

export default async function App({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
