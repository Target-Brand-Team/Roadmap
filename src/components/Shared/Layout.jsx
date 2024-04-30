import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen max-[1280px]:w-[1050px]">
      <Sidebar />

        <div className="">
          {<Outlet />}
          
        </div>
      </div>
    
  );
};

export default Layout;
