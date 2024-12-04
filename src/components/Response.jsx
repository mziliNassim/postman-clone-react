import React from "react";
import { Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Response = ({ response }) => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <Col md={6} className="mb-2">
        <Card className="mt-4" style={{ minHeight: "50vh" }}>
          <Card.Header className="d-flex align-items-center justify-content-between">
            <span>Response</span>
            {response && (
              <span>
                Status:{" "}
                <span
                  className={`${
                    parseInt(response.status) >= 200 &&
                    parseInt(response.status) < 300
                      ? "bg-success"
                      : "bg-danger"
                  } px-1 rounded`}
                >
                  {" "}
                  {response.status}
                </span>
              </span>
            )}
          </Card.Header>

          <Card.Body>
            <pre
              className={`p-2 rounded border ${
                theme === "dark"
                  ? "bg-secondary text-light"
                  : "bg-light text-dark"
              }`}
            >
              {response ? response.data : ""}
            </pre>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Response;
