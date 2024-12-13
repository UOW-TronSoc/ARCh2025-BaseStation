<a id="readme-top"></a>

<!-- PROJECT TITLE -->
<br />
<div align="center">
  <p align="center">
    A Websocket-ROS2 Publisher node
    <br />
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About
A minimal publsiher ROS node that uses Websocket connections to communicate with web server. The publisher is repsonsible for receiving JSON data, in a specified format, then communicates with a subsciber node via a topic in native ROS2 communcation.

## Prerequisites
Clone the repo in a workspace, then source ROS2 Humble `setup.bash` in root and use `colcon build` to compile the package.

## Usage
First declare default parameters, such as port number, host addresses, etc., then call `ros2 run` to initiate the script. 













