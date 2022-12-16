"use client";

import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

const Data = ({ children }: Props) => {
  const fetcher = async (endpoint: string) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default Data;
