import React from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {}

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  let isLogin = localStorage.getItem("isAdmin");
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={(props) => <Component {...props} />} />
  );
};
export { PrivateRoute, PublicRoute };
