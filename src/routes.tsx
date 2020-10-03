import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Settings from "./components/Settings";
import ProjectView from "./components/Projects/view";

type RouteProps = {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
  isAuthenticated: Boolean;
};

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }: RouteProps) => {
  
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Routes: React.FC = () => {
  type RootState = {
    auth: {
      isAuthenticated: Boolean;
    };
  };

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/"
          exact={true}
          component={Home}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/chat"
          component={Chat}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/settings"
          component={Settings}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
        exact
          path="/project-view/:id"
          component={ProjectView}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
