import "@assets/main.css";
import "@assets/chrome-bug.css";
import "keen-slider/keen-slider.min.css";

import React, {FC, ReactNode, useEffect} from "react";
import type {AppProps} from "next/app";
import {Head} from "@components/common";
import {ManagedUIContext, useUI} from "@components/ui/context";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// @ts-ignore
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {SystemThemeIndicator} from "@components/index";
import {LoadingSection} from "@components/ui";
import useCohortDetails from "@lib/hooks/batches/useCohortDetails";
import NotificationWrapper from "@components/notification/NotificationWrapper";

const Noop: FC<{ children?: ReactNode }> = ({children}) => <>{children}</>;
const CohortWrapper = ({Component, pageProps}: AppProps) => {
    const Layout = (Component as any).Layout || Noop;
    const {latestCohortData, user} = useUI();
    if (!latestCohortData && user) {
        return <div className={'h-screen w-screen'}>
            <LoadingSection message={'Preparing your class'}/>
        </div>
    }
    console.log('here');
    return <Layout pageProps={pageProps}>
        <NotificationWrapper/>
        <Component {...pageProps} />
    </Layout>
}
export default function MyApp(props: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());
    useEffect(() => {
        document.body.classList?.remove("loading");
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <>
                <Head/>
                <ManagedUIContext>
                    <CohortWrapper {...props}/>
                </ManagedUIContext>
            </>
            <ReactQueryDevtools initialIsOpen={false}/>
            <SystemThemeIndicator/>

        </QueryClientProvider>
    );
}
