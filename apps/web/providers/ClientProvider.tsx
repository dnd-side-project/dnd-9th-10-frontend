"use client";

import { PropsWithChildren } from "react";
import QueryClientWrapper from "../libs/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastProvider } from "@dnd9-10/webui/src/providers/ToastProvider";

export const ClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ToastProvider>
      <QueryClientWrapper>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientWrapper>
    </ToastProvider>
  );
};
