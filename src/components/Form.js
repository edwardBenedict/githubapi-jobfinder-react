import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormComp = ({ setInfo, info, getJobs }) => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Col sm={20}>
          <Form.Control
            type="text"
            onChange={(e) => {
              setInfo({ ...info, description: e.target.value });
            }}
            value={info.description}
            placeholder="Description"
            style={{ width: "200px" }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalPassword">
        <Col sm={20}>
          <Form.Control
            type="text"
            onChange={(e) => {
              setInfo({ ...info, location: e.target.value });
            }}
            value={info.location}
            placeholder="Location"
            style={{ width: "200px" }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Button
          type="submit"
          style={{ width: "200px" }}
          onClick={(e) => getJobs(e)}
        >
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default FormComp;
