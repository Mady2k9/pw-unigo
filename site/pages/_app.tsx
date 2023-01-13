import '@assets/main.css'
import '@assets/chrome-bug.css'

import React, { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// @ts-ignore
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NotificationWrapper from '@components/notification/NotificationWrapper'
import { ManagedUIMinimalContext } from '@components/ui/contextMinimal'

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>
export default function MyApp({ Component, ...props }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Head />
        <ManagedUIMinimalContext>
          <NotificationWrapper />
          <Component {...props} />
        </ManagedUIMinimalContext>
      </>
    </QueryClientProvider>
  )
}
