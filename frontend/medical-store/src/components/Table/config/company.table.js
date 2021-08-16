import { actionConfig } from "./common";

// This is the columns config for Medicine table
export const companyTableCols = (handleEdit, handleShow) => {
  return [
    actionConfig(handleEdit, handleShow),
    {
      title: "Company Name",
      render: (rowData) => {
        return <span>{rowData.company_name}</span>;
      },
    },
    {
      title: "Company Code",
      render: (rowData) => {
        return <span>{rowData.company_code}</span>;
      },
    },
    {
      title: "Company Website",
      render: (rowData) => {
        return <span>{rowData.company_website}</span>;
      },
    },
    {
      title: "Company Location",
      render: (rowData) => {
        return <span>{rowData.location}</span>;
      },
    },
  ];
};
