import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.css";
import { person } from "./date";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="8">You have appointments today {person.length}</Col>
        </Row>

        <Row className="justify-content-center my-4">
          <Col sm="8">
            <div className="rectangle p-2">
              {person.length ? (
                person.map((item) => {
                  return (
                    <div className="d-flex border-bottom mx-3 my-3">
                      <img
                        className="img-avatar"
                        src="person1.PNG"
                        alt="img"
                      ></img>
                      <div className="px-3">
                        <p className="d-inline">{item.name}</p>
                        <p className="">{item.date}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>No Appointments Today</h2>
              )}
            </div>
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
