import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { Provider } from "react-redux";
import store from "./featchers/store";

import Navigation from "./components/Navigation";
import Requiste from "./components/Requiste";
import AlertMessage from "./components/AlertMessage";
import Tabs from "./components/Tabs";
import Response from "./components/Response";

const App = () => {
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [response, setResponse] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    send("https://nassim.online/api/");
  }, []);

  const send = (url, method) => {
    setLoading(true);
    if (url === "") {
      setResponse({
        status: 400,
        data: `{Error : "Enter a valid End point !"}`,
      });
      return setLoading(false);
    }
    if (url?.startsWith("https://nassim.online")) {
      setResponse({
        status: 200,
        data: `{
    name: "Nassim MZILI",
    email: "mzilinassim@gmail.com",
    website: "https://nassim.online/",
    github : "https://github.com/mziliNassim",
    Linkedin : "https://www.linkedin.com/in/mzilinassim/",
    desc : \`Aspiring Full-Stack Web Developer and dedicated
          student with a passion for creating dynamic user-friendly
          web applications. Actively learning front-end and back-end
          technologies to build innovative solutions for modern web
          challenges. Committed to growing skills and contributing
          to impactful digital experiences.\`,
}`,
      });
      return setLoading(false);
    }
    sendRequest(url, method);
  };

  const sendRequest = async (url, method) => {
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      // headers (Authorization/ token / ....)
      const requestHeaders = headers.reduce((c_out, header) => {
        if (header.key && header.value) {
          c_out[header.key] = header.value;
        }
        return c_out;
      }, {});

      // Options
      const requestOptions = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...requestHeaders,
        },
      };

      if (["POST", "PUT", "PATCH"].includes(method)) {
        try {
          requestOptions.body = body
            ? JSON.stringify(JSON.parse(body))
            : JSON.stringify({});
        } catch (jsonError) {
          setError("Invalid JSON in request body");
          setLoading(false);
          return;
        }
      }

      // fetch request
      const fetchResponse = await fetch(url, requestOptions);
      const response = await fetchResponse.text();

      // JSON => text
      let data;
      try {
        data = JSON.stringify(JSON.parse(response), null, 2);
      } catch {
        data = response;
      }
      // results
      setResponse({
        status: fetchResponse.status,
        data: data,
        headers: Object.fromEntries(fetchResponse.headers.entries()),
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Container className="mt-4">
          <div>
            <Requiste loading={loading} sendRequest={send} />
            <AlertMessage error={error} />
            <Row className="mb-3">
              <Tabs
                headers={headers}
                setHeaders={setHeaders}
                body={body}
                setBody={setBody}
              />

              {/* Response Display */}
              <Response response={response} />
            </Row>
          </div>
        </Container>
      </Provider>
    </>
  );
};

export default App;
