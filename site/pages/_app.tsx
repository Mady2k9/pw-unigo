import "@assets/main.css";
import "@assets/chrome-bug.css";
import "keen-slider/keen-slider.min.css";

import React, { FC, ReactNode, useEffect } from "react";
import type { AppProps } from "next/app";
import { Head } from "@components/common";
import { ManagedUIContext } from "@components/ui/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// @ts-ignore
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {SystemThemeIndicator} from "@components/index";

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const [queryClient] = React.useState(() => new QueryClient());
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Head />
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ManagedUIContext>
      </>
      <ReactQueryDevtools initialIsOpen={false} />
      <SystemThemeIndicator/>

    </QueryClientProvider>
  );
}
