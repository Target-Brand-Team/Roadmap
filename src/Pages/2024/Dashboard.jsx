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
    <div className="flex flex-col gap-2 mt-1 mx-1 h-[2300px] max-[1280px]:w-[1050px]">
      <div className="bg-red-600 text-white rounded-sm py-1 px-3 font-bold text-lg flex justify-center">
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
          className="bg-targetYellow text-white rounded text-center text-lg mb-1 py-2 cursor-pointer"
          onClick={() => setShowCultural(!showCultural)}
        >
          <h3 className="">Cultural Context</h3>
        </div>
      )}

      {show ? (
        <Enterprise />
      ) : (
        <div
          className="bg-sky-950 text-white rounded text-center text-lg mt-[-7px] py-2"
          onClick={() => setShow(!show)}
        >
          <h3>Enterprise Priorities</h3>
        </div>
      )}

      {showOwned ? (
        <div className="bg-green-950 text-white text-lg font rounded text-center mt-[-3px] py-2">
          <h3 className="ml-3">Owned Brand Priorities</h3>
        </div>
      ) : (
        <OwnedPriorities />
      )}
    </div>
  );
};

export default Dashboard;
