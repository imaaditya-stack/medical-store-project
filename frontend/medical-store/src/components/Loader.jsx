import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="primary" size="lg" />
    </div>
  );
};

export default Loader;
