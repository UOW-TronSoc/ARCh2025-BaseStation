import React from "react";
import { ListGroup } from "react-bootstrap";

const RoboSpec = ({ specs }) => {
  return (
    <div>
      <h5 className="mb-3">Robo Spec</h5>
      <ListGroup variant="flush">
        {specs.map((spec, index) => (
          <ListGroup.Item key={index} className="bg-dark text-white">
            <div className="d-flex justify-content-between">
              <span>
                <strong>{spec.name}</strong> ({spec.type})
              </span>
              <span>{spec.quantity} pcs.</span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RoboSpec;
