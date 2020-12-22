import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { authSelectors } from "./redux/auth";

const PublicRoute = ({ component: Component, isAuthenticated, restricted, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? <Redirect to="/daily-rate" /> : <Component {...props} />
    }
  />
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
