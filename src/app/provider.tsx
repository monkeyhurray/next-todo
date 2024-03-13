"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const queryClient = new QueryClient();

const QueryProvider = ({ children }: React.PropsWithChildren) => {
  // const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
