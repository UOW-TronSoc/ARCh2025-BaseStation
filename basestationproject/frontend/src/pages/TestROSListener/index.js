import React, { useEffect, useState } from "react";
import ROSLIB from "roslib";

const TestRosListener = () => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("N/A");

  const ros = new ROSLIB.Ros({
    url: "ws://localhost:9090", // The WebSocket URL to your ROS master
  });

  useEffect(() => {
    // Wait until the connection is established
    ros.on("connection", () => {
      setStatus("connected");
      console.log("Connected to ROS WebSocket server");
    });
    ros.on("error", (error) => {
      setStatus("error");
      console.error("Error connecting to ROS:", error);
    });
    ros.on("close", () => {
      setStatus("closed");
      console.log("Disconnected from ROS WebSocket server");
    });

    // Subscribe to a ROS topic
    const listener = new ROSLIB.Topic({
      ros: ros,
      name: "/ros_test_topic",
      messageType: "std_msgs/String",
    });

    listener.subscribe((message) => {
      console.log("Received message:", message);
      setMessages((prevMessages) => [...prevMessages, message.data]);
    });

    return () => {
      // Cleanup when component unmounts
      listener.unsubscribe();
    };
  }, []);

  const publishMessage = (message) => {
    const ros_message = new ROSLIB.Message({
      data: message,
    });

    const publisher = new ROSLIB.Topic({
      ros: ros,
      name: "/ros_send_test_topic",
      messageType: "std_msgs/String",
    });

    publisher.publish(ros_message);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Test ROS Listener</h1>
      <p>To see this page update:</p>
      <ul style={{ listStylePosition: "inside", textAlign: "center" }}>
        <li>
          Run a Rosbridge connection at <code>ws://localhost:9090</code>
        </li>
        <li>
          Start publishing ROS messages to <code>/ros_test_topic</code>
        </li>
      </ul>
      <sub>
        Connection:{" "}
        {status === "connected" ? (
          <span style={{ color: "green", fontWeight: "bold" }}>Connected</span>
        ) : (
          <span style={{ color: "red", fontWeight: "bold" }}>{status}</span>
        )}
      </sub>
      <br />
      <br />
      <h3>
        <code>/ros_test_topic</code> messages received:{" "}
      </h3>
      <p id="messagges">{messages}</p>

      <div>
        <input type="text" id="message" />
        <button
          onClick={() => {
            publishMessage(document.getElementById("message").value);
          }}
        >
          Publish
        </button>
      </div>
    </div>
  );
};
export default TestRosListener;
