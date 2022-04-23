import React from "react";
import { Row, Col } from "react-bootstrap";

const DatesCounts = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">You have appointments today {person.length}</Col>
    </Row>
  );
};

export default DatesCounts;
