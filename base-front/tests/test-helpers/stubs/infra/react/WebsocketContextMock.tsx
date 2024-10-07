
import { WebSocketContext, WebSocketContextProps } from '@sandbox/infra/react/WebsocketContext';
import React, { useContext, useState } from 'react';

type WebSocketContextMockProps = {
  children: React.ReactNode;
  initialMessage?: any;
};

export const WebSocketContextMock = ({ children, initialMessage = null }: WebSocketContextMockProps) => {
  const [lastJsonMessage, setLastJsonMessage] = useState(initialMessage);
  const readyState = 1;

  const mockSendMessage = (message: any) => {
    setLastJsonMessage(JSON.parse(message));
  };

  const mockContextValue: WebSocketContextProps  = {
    lastJsonMessage,
    readyState,
    sendMessage: mockSendMessage,
  };

  return (
    <WebSocketContext.Provider value={mockContextValue}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketMock = () => useContext(WebSocketContext);
