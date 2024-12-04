import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";

const Requiste = ({ loading, sendRequest }) => {
  const [url, setUrl] = useState("https://nassim.online/api/");
  const [method, setMethod] = useState("GET");

  const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  return (
    <>
      {/* Request Configuration */}
      <Row className="mb-3">
        <Col md={2} className="mb-2">
          <Form.Select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            {httpMethods.map((httpMethod) => (
              <option key={httpMethod} value={httpMethod}>
                {httpMethod}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={8} className="mb-2">
          <Form.Control
            type="text"
            placeholder="Enter URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Col>

        <Col md={2} className="mb-2">
          <Button
            variant="primary"
            className="w-100"
            onClick={() => sendRequest(url, method)}
            disabled={loading}
          >
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Send"
            )}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Requiste;
