"use client";

import { SWRConfig, SWRConfiguration } from "swr";

type Props = {
  children: React.ReactNode;
};

const Query = ({ children }: Props) => {
  const fetcher = async (endpoint: string) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

  const configuration: SWRConfiguration = {
    suspense: true,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  return (
    <SWRConfig value={{ fetcher, ...configuration }}>{children}</SWRConfig>
  );
};

export default Query;
