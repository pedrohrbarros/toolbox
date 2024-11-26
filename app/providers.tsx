"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "react-query";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const query_client = new QueryClient();

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <QueryClientProvider client={query_client}>
      <NextThemesProvider {...themeProps}>
        <ThemeProvider>{children}</ThemeProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
