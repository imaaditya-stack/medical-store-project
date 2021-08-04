import { Button } from "react-bootstrap";

export const actionConfig = (handleEdit, handleShow) => ({
  title: "Action",
  render: (rowData) => {
    return (
      <>
        <Button
          onClick={() => handleEdit(rowData)}
          style={{ marginRight: "20px" }}
        >
          Edit
        </Button>
        <Button className="red-btn" onClick={() => handleShow(rowData)}>
          Delete
        </Button>
      </>
    );
  },
});
