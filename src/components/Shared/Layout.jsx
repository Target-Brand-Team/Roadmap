import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-full">
      <Sidebar />

        <div className="bg-gray-200 w-full h-screen">
          {<Outlet />}
          
        </div>
      </div>
    
  );
};

export default Layout;
