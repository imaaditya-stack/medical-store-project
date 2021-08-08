import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authStateCheck, authError } from "./redux/actions/auth";
import { getAuthToken } from "./utils/auth";
import PrivateRoute from "./components/Private.Route";
import {
  Login,
  AddMedicine,
  AddStore,
  ManageMedicine,
  ManageStore,
  NotFound,
} from "./pages";

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
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
