import { actionConfig } from "./common";

// This is the columns config for Store table
export const storeTableCols = (handleEdit, handleShow) => {
  return [
    actionConfig(handleEdit, handleShow),
    {
      title: "Store Name",
      render: (rowData) => {
        return <span>{rowData.store_name}</span>;
      },
    },
    {
      title: "Username",
      render: (rowData) => {
        return <span>{rowData.username}</span>;
      },
    },
    {
      title: "Store License",
      render: (rowData) => {
        return (
          <span>
            {rowData.store_license === 0
              ? "Retail Drug Licence"
              : "Wholesale Drug Licence"}
          </span>
        );
      },
    },
    {
      title: "Store Type",
      render: (rowData) => {
        return <span>{rowData.store_type_label}</span>;
      },
    },
  ];
};
