import React from 'react'
import Logo from '../assets/Logo.png'
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from '../Database/Navigation'

const Sidebar = () => {
  return (
    <div className="bg-white h-screen p- flex flex-col border-r-2 border-teal-500 text-black">
    <div className=" mb-12 mt-8">
      <img src={Logo} className="w-[140px] ml-3" />
    </div>
    <div className="flex-1">
      {DASHBOARD_SIDEBAR_LINKS.map((item) => (
        <SidebarLink key={item.key} item={item} />
      ))}
    </div>

  </div>
  )
}

const SidebarLink = ({ item }) => {
    const { pathname } = useLocation();
  
    return (
      <Link
        to={item.path}
        className={
          pathname === item.path
            ? "flex items-center gap-3 py-5 px-8 mx-4 font-medium text-base  hover:bg-red-400 rounded-md text-red-800"
            : "flex items-center gap-3 py-5 px-8 mx-4 font-medium text-base  hover:bg-red-200 rounded-md text-neutral-500"
        }
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>
    );
  };

export default Sidebar