import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ConfirmModal } from "../Modal";
import PropTypes from "prop-types";

const CustomizedTables = ({ cols, data, handleDelete, show, handleClose }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {cols?.map((col, idx) => (
              <StyledTableCell key={idx}>{col.title}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <StyledTableRow key={row.id}>
              {cols?.map((col) => (
                <StyledTableCell key={col.title}>
                  {col.render(row)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmModal
        show={show}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </TableContainer>
  );
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0364C0",
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

CustomizedTables.propTypes = {
  cols: PropTypes.array,
  data: PropTypes.array,
  show: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleClose: PropTypes.func,
};

export default CustomizedTables;
