import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth/authentication";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {window.location.pathname === "/login" && isAuthenticated() === true ? (
          <Redirect to="/" />
        ) : (
          <Route path="/login" component={Login} />
        )}

        {window.location.pathname === "/dashboard" &&
        isAuthenticated() === false ? (
          <Redirect to="/" />
        ) : (
          <Route path="/dashboard" component={Dashboard} />
        )}
        <Route path="*" component={() => <h3>Page not found</h3>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
