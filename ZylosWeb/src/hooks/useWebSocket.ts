import { useState, useEffect, useRef } from 'react';

const useWebSocket = (url: string) => {
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!url) return;

    ws.current = new WebSocket(url);

    ws.current.onopen = () => setIsConnected(true);
    ws.current.onclose = () => setIsConnected(false);
    ws.current.onmessage = (event) => setMessage(JSON.parse(event.data));

    return () => {
      ws.current?.close();
    };
  }, [url]);

  const sendMessage = (data: any) => {
    ws.current?.send(JSON.stringify(data));
  };

  return { isConnected, message, sendMessage };
};

export default useWebSocket;