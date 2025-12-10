import React from "react";
import MenuComponent from "../components/MenuComponent";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <MenuComponent />
      <Outlet />
    </>
  );
};

export default MainLayout;
