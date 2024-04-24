import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../Database_2024/Navigation";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

const Sidebar = () => {
  const [hideSidebar, setHideSidebar] = useState(true);

  return (
    <>
      {hideSidebar ? (
        <div className="bg-white h-screen w-32 flex flex-col border-r border-l border-teal-400 text-black relative">
          <div className=" mb-16 mt-16">
            <img src={Logo} className="w-[110px] ml-2" />
          </div>
          <div className="absolute top-3 left-[130px] text-2xl text-red-600">
            {/* <RxDoubleArrowLeft
              onClick={() => setHideSidebar(!hideSidebar)}
            /> */}
          </div>
          <div className="flex-1">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white h-screen border-l border-r border-t border-teal-400">
          <div>
          <RxDoubleArrowRight
            className="absolute text-2xl text-red-600 top-3 left-2 "
            onClick={() => setHideSidebar(!hideSidebar)}
          />
          </div>
          <div className="h-screen mt-16">
            <span className="vertical pr-1 pl-2 text-l text-red-600 font-medium  ">
              Portfolio Roadmap
            </span>
          </div>
        </div>
      )}
    </>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={
        pathname === item.path
          ? "flex items-center gap-3 py-5 px-3 mx-4 font-medium text-base  hover:bg-red-400 rounded-md text-red-800"
          : "flex items-center gap-3 py-5 px-3 mx-4 font-medium text-base  hover:bg-red-200 rounded-md text-neutral-500"
      }
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};

export default Sidebar;
