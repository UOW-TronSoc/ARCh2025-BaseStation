import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const DeviceOverview = ({ devices }) => {
  return (
    <div className="my-4">
      <h5 className="mb-3">Quick Overview</h5>
      <Row>
        {devices.map((device, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card className={index === 0 ? "card-highlight" : ""} body>
              <h6>{device.name}</h6>
              <p>{device.status}%</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DeviceOverview;
