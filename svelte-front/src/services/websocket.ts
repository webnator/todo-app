export class WebSocketService {
  private socket: WebSocket | null = null;
  private messageHandler: ((data: any) => void) | null = null;

  connect(url: string) {
    this.socket = new WebSocket(url);
    this.socket.onopen = () => console.log('WebSocket connected');
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (this.messageHandler) {
        this.messageHandler(data);
      }
    };
    this.socket.onerror = (error) => console.error('WebSocket error:', error);
    this.socket.onclose = () => console.log('WebSocket disconnected');
  }

  setMessageHandler(handler: (data: any) => void) {
    this.messageHandler = handler;
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
