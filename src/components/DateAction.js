import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const DateAction = ({ deleteData, viewData }) => {
  return (
    <Row className="justify-content-center my-4">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={deleteData} className="btn-style p-2">
          Delete
        </Button>
        <Button onClick={viewData} className="btn-style p-2">
          Show
        </Button>
      </Col>
    </Row>
  );
};

export default DateAction;
