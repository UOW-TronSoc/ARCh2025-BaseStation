import rclpy
from rclpy.node import Node
from std_msgs.msg import String
import json
import websockets
import asyncio

# intermediary node to bridge between django and ros2ros comms
class JsonIntermediaryPublisher(Node):
    def __init__(self):
        super().__init__('json_publisher')
        self.publisher = self.create_publisher(String, '/json_commands', 10)
        self.get_logger().info('Intermediary Node Initialized')
        
    async def listen_to_ws(self):
        uri = "ws://localhost:9090"  # rosbridge WebSocket server address
        async with websockets.connect(uri) as websocket:
            while rclpy.ok():
                # Receive a message from the Django server
                message = await websocket.recv()
                data = json.loads(message)  # Assuming JSON payload
                command = data.get("command", "default_command")
                # "Converts" json files into ROS2 native transport types
                self.publish_json(command)
                
    def publish_json(self, message):
        msg = String()
        msg.data = message
        self.publisher.publish(msg)
        self.get_logger().info(f'Published: {message}')

def main():
    rclpy.init()
    node = JsonIntermediaryPublisher()
    # Start listening
    loop = asyncio.get_event_loop()
    loop.run_until_complete(node.listen_for_ws())
    rclpy.spin(node)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
