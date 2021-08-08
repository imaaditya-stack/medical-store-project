import { deleteMed, loadMeds } from "../redux/actions/medicine";
import { useSelector } from "react-redux";
import withDrawer from "../components/Drawer/withDrawer";
import { medicineTableCols } from "../components/Table/config/medicine.table";
import CrudComponent from "../components/CrudComponent";

const ManageMedicine = () => {
  const { meds, loading } = useSelector((state) => state.medReducer) || {};

  return (
    <CrudComponent
      data={meds}
      loading={loading}
      href="/add-medicine"
      readAction={loadMeds}
      tableConfig={medicineTableCols}
      deleteAction={deleteMed}
      btnLabel="Add Medicine"
    />
  );
};

export default withDrawer({ title: "Manage Medicine" })(ManageMedicine);
