import React from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const Global = useContext(AuthContext);
  
  if (!Global.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
