import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const toke = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
