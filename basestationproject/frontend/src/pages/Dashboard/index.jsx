import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConnectionBar from "../../components/ConnectionBar";
import DeviceOverview from "../DeviceOverview/index";
import RoboSpec from "../RoboSpec/index";
import axios from "axios";
import "./index.css";

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deviceResponse = await axios.get("http://localhost:8000/api/devices");
        const specResponse = await axios.get("http://localhost:8000/api/specs");
        setDevices(deviceResponse.data);
        setSpecs(specResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid>
      {/* Connection Bar */}
      <ConnectionBar />

      <Row>
        {/* Quick Overview */}
        <Col md={8}>
          <DeviceOverview devices={devices} />
        </Col>

        {/* Robo Spec */}
        <Col md={4}>
          <RoboSpec specs={specs} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
