import React from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const AlertDialog = ({ alerts }) => {
  return alerts?.map((alert) => (
    <Alert key={alert.id} variant={alert.type}>
      <span>{alert.msg}</span>
    </Alert>
  ));
};

Alert.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      msg: PropTypes.string,
      type: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default AlertDialog;
