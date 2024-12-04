import React from "react";

import { Col, Form, Nav, Tab } from "react-bootstrap";
// import { useSelector } from "react-redux";

const Tabs = ({ headers, setHeaders, body, setBody }) => {
  // const theme = useSelector((state) => state.theme.value);

  // const addHeaderField = () => {
  //   setHeaders([...headers, { key: "", value: "" }]);
  // };

  // const updateHeader = (index, field, value) => {
  //   const newHeaders = [...headers];
  //   newHeaders[index][field] = value;
  //   setHeaders(newHeaders);
  // };

  // const removeHeader = (index) => {
  //   const newHeaders = headers.filter((_, i) => i !== index);
  //   setHeaders(newHeaders);
  // };

  return (
    <>
      {/* Tabs for Headers and Body */}
      <Col md={6} className="mb-2">
        <Tab.Container defaultActiveKey="body">
          <Nav variant="tabs" className="mb-3">
            <Nav.Item>
              <Nav.Link eventKey="body">Body</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="headers">Headers</Nav.Link>
            </Nav.Item> */}
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="body">
              <Form.Control
                as="textarea"
                placeholder="Enter JSON body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={5}
                className="w-100"
                style={{ minHeight: "40vh" }}
              />
            </Tab.Pane>

            {/* <Tab.Pane eventKey="headers">
              {headers.map((header, index) => (
                <Row key={index} className="mb-2">
                  <Col md={5} className="mb-1">
                    <Form.Control
                      type="text"
                      placeholder="Key"
                      value={header.key}
                      onChange={(e) =>
                        updateHeader(index, "key", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={5} className="mb-1">
                    <Form.Control
                      type="text"
                      placeholder="Value"
                      value={header.value}
                      onChange={(e) =>
                        updateHeader(index, "value", e.target.value)
                      }
                    />
                  </Col>
                  <Col
                    md={2}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <Button
                      variant="danger"
                      className=""
                      onClick={() => removeHeader(index)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}

              <Button
                variant={theme === "dark" ? "secondary" : "light"}
                onClick={addHeaderField}
                className="mt-2 w-100 border"
              >
                Add Header
              </Button>
            </Tab.Pane> */}
          </Tab.Content>
        </Tab.Container>
      </Col>
    </>
  );
};

export default Tabs;
