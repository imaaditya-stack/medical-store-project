import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormFooter = ({ href }) => {
  return (
    <div style={{ float: "right" }}>
      <Link to={href}>
        <Button variant="primary" type="button" style={{ marginRight: "30px" }}>
          Back
        </Button>
      </Link>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </div>
  );
};

export default FormFooter;
