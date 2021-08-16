import withDrawer from "../Layout/Drawer/withDrawer";
import { useSelector } from "react-redux";
import CrudComponent from "../Components/CrudComponent";
import { deleteCompany, loadCompanies } from "../Redux/actions/company";
import { companyTableCols } from "../Components/Table/config/company.table";

const ManageCompany = () => {
  const { companies, loading } =
    useSelector((state) => state.companyReducer) || {};
  return (
    <div>
      <CrudComponent
        data={companies}
        loading={loading}
        href="/add-company"
        readAction={loadCompanies}
        tableConfig={companyTableCols}
        deleteAction={deleteCompany}
        btnLabel="Add Company"
      />
    </div>
  );
};

export default withDrawer({ title: "Manage Company" })(ManageCompany);
