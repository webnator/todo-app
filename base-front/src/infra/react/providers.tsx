'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import type * as React from 'react'
import { ContainerProvider } from './ContainerContext'
import { getQueryClient } from './queryClient'
import { WebSocketProvider } from './WebsocketContext'
import serverConfig from '@sandbox/config/server.config'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <ContainerProvider>
      <QueryClientProvider client={queryClient}>
        <WebSocketProvider url={serverConfig.SOCKET_URL}>
          {children}
        </WebSocketProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ContainerProvider>
  );
}
