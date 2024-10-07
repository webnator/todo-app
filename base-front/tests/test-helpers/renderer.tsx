import { ContainerProvider } from '@sandbox/infra/react/ContainerContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, RenderResult } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import testContainer from '../test.container';
import { WebSocketContextMock } from './stubs/infra/react/WebsocketContextMock';

export const TestProvidersWrapper = ({ children}: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
      },
    },
  });

  return (
    <ContainerProvider container={testContainer}>
      <QueryClientProvider client={queryClient}>
        <WebSocketContextMock>
          {children}
        </WebSocketContextMock>
      </QueryClientProvider>
    </ContainerProvider>
  );
};

export const renderView = async (view: JSX.Element): Promise<RenderResult> => act(async () => render(
  <TestProvidersWrapper>
    {view}
  </TestProvidersWrapper>
));
