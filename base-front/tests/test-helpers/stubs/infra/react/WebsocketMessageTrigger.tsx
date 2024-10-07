import { WebSocketContext } from '@sandbox/infra/react/WebsocketContext';
import { useContext, act } from 'react';

const TriggerWebSocketMessage = ({ message }: { message: Record<string, any>; }) => {
  const { sendMessage } = useContext(WebSocketContext)!;  // Access the WebSocket context

  setTimeout(() => {
    sendMessage(JSON.stringify(message));
  }, 10);

  return null;
};

export default TriggerWebSocketMessage;