import threading
import json
import rclpy
import asyncio
import websockets
from rclpy.node import Node
from std_msgs.msg import String

class RosbridgeWebSocketNode(Node):
    def __init__(self):
        super().__init__('rosbridge_websocket_node')
        
        # Parameters, set before launch
        self.declare_parameter('websocket_uri', 'ws://localhost:9090')
        self.websocket_uri = self.get_parameter('websocket_uri').value
        
        # ROS Publisher init
        self.publisher = self.create_publisher(String, 'robot_commands', 10)

        # Start WebSocket listener in a thread
        self.websocket_thread = threading.Thread(target=self.run_websocket_connection, daemon=True)
        self.websocket_thread.start()
        self.get_logger().info(f"Started WebSocket listener at {self.websocket_uri}")

    # Execution for the WS 
    def run_websocket_connection(self):
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        loop.run_until_complete(self.listen_to_server())

    # Listener function at the port of the Django server
    async def listen_to_server(self):
        try:
            async with websockets.connect(self.websocket_uri) as websocket:
                self.get_logger().info(f"Connected to WebSocket server at {self.websocket_uri}")
                async for message in websocket:
                    self.get_logger().info(f"Received message: {message}")
                    self.process_json_message(message)
        except Exception as e:
            self.get_logger().error(f"WebSocket error: {e}")
        finally:
            self.get_logger().info("WebSocket connection closed.")
            
    # Preprocessing function
    '''
        JSON commands structure required for ROSBRIDGE to read
        {
        "op": "publish",
        "topic": "/robot_commands",
        "msg": {
            "command": "move",
            "params": {
            "direction": "forward",
            "speed": 0.5
            }
        }
        }
    '''
    def process_json_message(self, json_message):
        # Use rosbridge_library for preprocessing, logic to be discussed
        try:
            # Translate JSON to ROS types
            message = json.loads(json_message)
            ros_msg = String()
            ros_msg.data = json.dumps(message)
            # Publish the message to the topic
            self.publisher.publish(ros_msg)
            self.get_logger().info(f"Published to {message}: {ros_msg.data}")
        except Exception as e:
            self.get_logger().error(f"Error processing JSON message: {e}")

    def destroy_node(self):
        # Threads automatically terminate when the program exits
        super().destroy_node()

def main(args=None):
    rclpy.init(args=args)
    node = RosbridgeWebSocketNode()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()