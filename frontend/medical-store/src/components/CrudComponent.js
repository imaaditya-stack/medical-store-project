import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import AddIcon from "@material-ui/icons/Add";
import CustomizedTables from "../components/Table/Table";
import AlertDialog from "./Alert";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { RESET_ALERTS } from "../redux/actions/action.types";

const CrudComponent = ({
  data,
  loading,
  href,
  readAction,
  tableConfig,
  deleteAction,
  btnLabel,
}) => {
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const alerts = useSelector((state) => state.alertReducer) || [];

  const handleClose = () => setShow(false);

  const handleShow = (row) => {
    setShow(true);
    setSelectedRow(row);
  };

  const handleEdit = (record) => {
    history.push({
      pathname: `${href}`,
      state: { record, update: true },
    });
  };

  const handleDelete = () => {
    dispatch(deleteAction(selectedRow, history, data));
    setShow(false);
  };

  useEffect(() => {
    data.length === 0
      ? dispatch(readAction())
      : console.log("USING CACHED DATA FROM REDUX");

    return () => {
      dispatch({ type: RESET_ALERTS });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Link to={href}>
        <Button className="add-btn">
          <AddIcon /> {btnLabel}
        </Button>
      </Link>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AlertDialog alerts={alerts} />
          <CustomizedTables
            cols={tableConfig(handleEdit, handleShow)}
            data={data}
            show={show}
            handleDelete={handleDelete}
            handleClose={handleClose}
          />
        </>
      )}
    </div>
  );
};

CrudComponent.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  href: PropTypes.string,
  readAction: PropTypes.func,
  tableConfig: PropTypes.func,
  deleteAction: PropTypes.func,
  btnLabel: PropTypes.string,
};

export default CrudComponent;
