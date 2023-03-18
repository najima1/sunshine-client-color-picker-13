import React from "react";
import { Outlet } from "react-router-dom";
import SidebarPro from "../Pages/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="flex-3 p-3">
        <SidebarPro />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
