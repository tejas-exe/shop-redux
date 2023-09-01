import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./UIUX/Header";

function RoutComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RoutComponent;
