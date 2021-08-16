import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authStateCheck, authError } from "./Redux/actions/auth";
import { getAuthToken } from "./Utils/auth";
import PrivateRoute from "./Components/Private.Route";
import {
  Login,
  AddMedicine,
  AddStore,
  ManageMedicine,
  ManageStore,
  NotFound,
} from "./Pages";
import ManageCompany from "./Pages/manage.company";
import AddCompany from "./Pages/add.company";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCheck());

    window.addEventListener("storage", () => {
      if (!getAuthToken()) dispatch(authError());
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/stores" component={ManageStore} />
        <PrivateRoute path="/add-store" component={AddStore} />
        <PrivateRoute path="/medicines" component={ManageMedicine} />
        <PrivateRoute path="/add-medicine" component={AddMedicine} />
        <PrivateRoute path="/companies" component={ManageCompany} />
        <PrivateRoute path="/add-company" component={AddCompany} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
