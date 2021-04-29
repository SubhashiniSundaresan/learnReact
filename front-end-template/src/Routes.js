import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}></Route>
     <route.Component/>
     ))}
    </Switch>
  </Router>
);
