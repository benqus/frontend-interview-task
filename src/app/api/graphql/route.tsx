import { gqlServer } from "@/lib/api";

const { handleRequest } = gqlServer;

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
