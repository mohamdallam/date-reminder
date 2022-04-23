import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { person } from "./date";
import DatesCounts from "./components/DatesCounts";
import DateList from "./components/DateList";
import DateAction from "./components/DateAction";

function App() {
  const [personDate, setpersonDate] = useState(person);

  const onDelete = () => {
    setpersonDate([]);
  };

  const onViewData = () => {
    setpersonDate(person);
  };

  useEffect(() => {
    return () => {
      setpersonDate([]);
    };
  }, []);

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCounts person={personDate} />
        <DateList person={personDate} />
        <DateAction deleteData={onDelete} viewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
