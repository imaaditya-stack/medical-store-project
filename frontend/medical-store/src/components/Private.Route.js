import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated } =
    useSelector((state) => state.authReducer) || {};

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <div className="fs-loader">
            <Loader />
          </div>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", authenticated: false }} />
        )
      }
    />
  );
};

export default PrivateRoute;
