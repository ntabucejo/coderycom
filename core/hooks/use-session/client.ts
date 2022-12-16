import { useSession, signIn, signOut } from "next-auth/react";

const client = () => {
  const { data: session } = useSession();
  return { session, signIn, signOut };
};

export default client;
