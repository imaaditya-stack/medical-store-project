import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Medicine from "./pages/Manage.Medicine";
import MedicineForm from "./pages/Add.Medicine";
import Store from "./pages/Manage.Store";
import StoreForm from "./pages/Add.Store";
import { useDispatch } from "react-redux";
import { authStateCheck, authError } from "./redux/actions/auth";
import { getAuthToken } from "./utils/auth";
import PrivateRoute from "./components/Private.Route";
import NotFound from "./pages/NotFound";

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
        <PrivateRoute path="/stores" component={Store} />
        <PrivateRoute path="/add-store" component={StoreForm} />
        <PrivateRoute path="/medicines" component={Medicine} />
        <PrivateRoute path="/add-medicine" component={MedicineForm} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
