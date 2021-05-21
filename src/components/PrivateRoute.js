import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ login, ...props }) {
  return login ? <Route {...props} /> : <Navigate replace to="/login" />;
}

export default PrivateRoute;
