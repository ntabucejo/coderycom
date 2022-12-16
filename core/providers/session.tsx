"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const Session = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Session;
