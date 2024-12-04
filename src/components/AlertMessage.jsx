import React from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = ({ error }) => {
  return (
    <>
      {/* Error Alert */}
      {error && (
        <Alert variant="danger" className="mb-3">
          {error}
        </Alert>
      )}
    </>
  );
};

export default AlertMessage;
