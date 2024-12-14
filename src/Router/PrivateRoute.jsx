import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg min-h-[60vh]"></span>
      </div>
    );
  }
  return <Navigate to="/login" state={pathname}></Navigate>;
};

export default PrivateRoute;
