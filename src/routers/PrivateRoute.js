import React from "react";

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user.logged ? children : <Navigate to="/login" />;
};
