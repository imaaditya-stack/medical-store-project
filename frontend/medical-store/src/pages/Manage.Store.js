import { deleteStore, loadStores } from "../Redux/actions/store";
import { useSelector } from "react-redux";
import withDrawer from "../Layout/Drawer/withDrawer";
import { storeTableCols } from "../Components/Table/config/store.table";
import CrudComponent from "../Components/CrudComponent";

const ManageStore = () => {
  const { stores, loading } = useSelector((state) => state.storeReducer) || {};

  return (
    <CrudComponent
      data={stores}
      loading={loading}
      href="/add-store"
      readAction={loadStores}
      tableConfig={storeTableCols}
      deleteAction={deleteStore}
      btnLabel="Add Store"
    />
  );
};

export default withDrawer({ title: "Manage Store" })(ManageStore);
