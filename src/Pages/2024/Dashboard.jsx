import React, { useState } from "react";
import DashboardGrid from "../../components/DashboardGrid";
import Calendar from "../../components/Calendar";
import Enterprise from "./Enterprise";
import OwnedPriorities from "./OwnedPriorities";
import Cultural from "./Cultural";
import { HiChevronDown } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [showCultural, setShowCultural] = useState(true);
  const [showOwned, setShowOwned] = useState(false);

  return (
    <div className="flex flex-col gap-2 mt-1 mx-1 h-[3500px] max-[1280px]:w-[1050px]">
      <div className="bg-red-500 text-white rounded-sm py-1 px-3 font-bold text-lg flex justify-center">
        2024
      </div>
      <DashboardGrid
        showCultural={showCultural}
        setShowCultural={setShowCultural}
        setShow={setShow}
        show={show}
        showOwned={showOwned}
        setShowOwned={setShowOwned}
      />

      <Calendar />

      {showCultural ? (
        <Cultural />
      ) : (
        <div
          className="bg-targetYellow hover:bg-yellow-600 flex items-center text-white rounded text-center text-lg mb-1 py-2 cursor-pointer group"
          onClick={() => setShowCultural(!showCultural)}
        >
          <h3 className="ml-[461px]">Cultural Context</h3>

          <FaPlus className="ml-[433px] cursor-pointer text-[16px]" />
        </div>
      )}

      {show ? (
        <Enterprise />
      ) : (
        <div
          className="bg-sky-950 hover:bg-cyan-900 flex items-center text-white rounded text-center text-lg mt-[-7px] py-2 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h3 className="ml-[448px]">Enterprise Priorities</h3>
          <FaPlus className="ml-[420px] cursor-pointer text-[16px]" />
        </div>
      )}

      {showOwned ? (
        <div
          className="bg-green-950 hover:bg-green-900 text-white text-lg font rounded text-center mb-[-6px] mt-[-3px] py-2 flex items-center group cursor-pointer"
          onClick={() => setShowOwned(!showOwned)}
        >
          <h3 className="ml-[440px]">Owned Brand Priorities</h3>

          <FaPlus className="ml-[400px] cursor-pointer text-[16px]" />
        </div>
      ) : (
        <OwnedPriorities />
      )}
    </div>
  );
};

export default Dashboard;
