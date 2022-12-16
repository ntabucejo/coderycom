import { unstable_getServerSession } from "next-auth";

const useSession = async () => {
  const session = await unstable_getServerSession();
  return { session };
};

export default useSession;
