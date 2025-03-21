import { useEffect } from 'react';
import { websocketClient } from '@/api/websocket-client';

type WebSocketMessage = { data: unknown };

export const useWebSocket = (onMessage: (data: unknown) => void) => {
  useEffect(() => {
    websocketClient.connect();

    websocketClient.on('message', (message: WebSocketMessage) => {
      onMessage(message.data);
    });

    websocketClient.on('error', (error) => {
      console.error('WebSocket error:', error);
    });

    return () => {
      websocketClient.disconnect();
    };
  }, []);
};
