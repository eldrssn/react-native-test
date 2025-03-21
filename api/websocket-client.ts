import { EventEmitter } from 'events';
import { WS_URL } from './constants';

class WebSocketClient extends EventEmitter {
  private socket: WebSocket | null = null;
  private isConnected: boolean = false;

  constructor() {
    super();
  }

  connect() {
    this.socket = new WebSocket(WS_URL);

    this.socket.onopen = () => {
      this.isConnected = true;
      this.emit('connected');
      console.log('WebSocket connected');
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.emit('message', data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    this.socket.onerror = (error) => {
      this.emit('error', error);
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      this.isConnected = false;
      this.emit('disconnected');
      console.log('WebSocket disconnected');
    };
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }

  send(message: any) {
    if (this.socket && this.isConnected) {
      this.socket.send(JSON.stringify(message));
    }
  }
}

export const websocketClient = new WebSocketClient();
