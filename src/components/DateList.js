import React from "react";
import { Row, Col } from "react-bootstrap";

const DateList = ({ person }) => {
  return (
    <Row className="justify-content-center my-4">
      <Col sm="8">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3 my-3">
                  <img className="img-avatar" src="person1.PNG" alt="img"></img>
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
  );
};

export default DateList;
