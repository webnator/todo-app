import { WsMessage } from '@sandbox/services/abstractions/wsMessage';
import React, { createContext, useContext } from 'react';
import useWebSocket from 'react-use-websocket';

export type WebSocketContextProps = {
  lastJsonMessage: WsMessage | null;
  readyState: number;
  sendMessage: (message: string) => void;
}

export const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<{ url: string; children: React.ReactNode }> = ({ url, children }) => {
  const { lastJsonMessage, readyState, sendJsonMessage } = useWebSocket(url);

  const sendMessage = (message: string) => {
    sendJsonMessage(message);
  };

  return (
    <WebSocketContext.Provider value={{ lastJsonMessage: lastJsonMessage as WsMessage, readyState, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Custom hook to use the WebSocket context
export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
};
