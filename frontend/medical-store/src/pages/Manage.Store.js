import { deleteStore, loadStores } from "../redux/actions/store";
import { useSelector } from "react-redux";
import withDrawer from "../components/Drawer/withDrawer";
import { storeTableCols } from "../components/Table/config/store.table";
import CrudComponent from "../components/CrudComponent";

const Store = () => {
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

export default withDrawer({ title: "Manage Store" })(Store);
