"use client";
import React, { ReactNode, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
