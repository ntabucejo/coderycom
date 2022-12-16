import { unstable_getServerSession } from "next-auth";

const server = async () => {
  const session = await unstable_getServerSession();
  return { session };
};

export default server;
