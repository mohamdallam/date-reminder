import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.css";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="8">You have appointments today</Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle"></div>
          </Col>
        </Row>

        <Row className="justify-content-center my-4">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn-style p-2">Delete</Button>
            <Button className="btn-style p-2">Show</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
