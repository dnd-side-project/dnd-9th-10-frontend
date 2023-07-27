"use client";

import { PropsWithChildren } from "react";
import QueryClientWrapper from "../libs/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientWrapper>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientWrapper>
  );
};
