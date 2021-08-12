import { actionConfig } from "./common";

// This is the columns config for Medicine table
export const medicineTableCols = (handleEdit, handleShow) => {
  return [
    actionConfig(handleEdit, handleShow),
    {
      title: "Medicine Name",
      render: (rowData) => {
        return <span>{rowData.medicine_name}</span>;
      },
    },
    {
      title: "Medicine Price",
      render: (rowData) => {
        return <span>Rs. {rowData.medicine_price}</span>;
      },
    },
    {
      title: "Expiry Date",
      render: (rowData) => {
        return <span>{rowData.medicine_expiry_date}</span>;
      },
    },
    {
      title: "Medicine Type",
      render: (rowData) => {
        return <span>{rowData.medicine_type_id_label}</span>;
      },
    },
    {
      title: "Store Name",
      render: (rowData) => {
        return (
          <span>
            {rowData.store_id ? rowData.store_id_label : "NOT SPECIFIED"}
          </span>
        );
      },
    },
  ];
};
