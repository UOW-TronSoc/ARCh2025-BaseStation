import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const ConnectionBar = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    try {
      await axios.post("http://localhost:8000/api/connect");
      setIsConnected(true);
    } catch (error) {
      console.error("Error connecting:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await axios.post("http://localhost:8000/api/disconnect");
      setIsConnected(false);
    } catch (error) {
      console.error("Error disconnecting:", error);
    }
  };

  return (
    <Container fluid className="p-3 mb-3 bg-dark rounded">
      <Row className="align-items-center">
        <Col md={8}>
          <h4 className="m-0">Kanga</h4>
        </Col>
        <Col md={4} className="text-end">
          {isConnected ? (
            <Button
              variant="success"
              className="custom-btn"
              onClick={handleDisconnect}
            >
              Connected
            </Button>
          ) : (
            <Button
              variant="danger"
              className="custom-btn"
              onClick={handleConnect}
            >
              Disconnect
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ConnectionBar;
