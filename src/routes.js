import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth/authentication";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />

        {window.location.pathname === "/login" && isAuthenticated() === true ? (
          <Redirect to="/" />
        ) : (
          <Route path="/login" component={Login} />
        )}

        <Route path="*" component={() => <h3>Page not found</h3>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
