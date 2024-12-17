import React, { useEffect, useState } from "react";

const TestRosListener = () => {
  const [message, setMessage] = useState("No message yet");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");

    ws.onopen = () => {
      console.log("Connected to ROS Bridge");
      ws.send('{"op": "subscribe", "topic": "/chatter"}');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessage(message.msg.data);
    };

    ws.onclose = () => {
      console.log("Disconnected from ROS Bridge");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Test ROS Listener</h1>
      <p>{message}</p>
    </div>
  );
};
export default TestRosListener;
