import React, { useState } from "react";
import DashboardGrid from "../../components/DashboardGrid";
import Calendar from "../../components/Calendar";
import Enterprise from "./Enterprise";
import OwnedPriorities from "./OwnedPriorities";
import Cultural from "./Cultural";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [showCultural, setShowCultural] = useState(false);
  const [showOwned, setShowOwned] = useState(false);

  return (
    <div className="flex flex-col gap-2 mt-1 mr-1 max-[1200px]:w-[1000px]"> 
      <div className="bg-white rounded-sm py-1 px-3 font-bold text-red-600 text-lg flex justify-center">
        2024
      </div>
      <DashboardGrid
        showCultural={showCultural}
        setShow={setShow}
        setShowCultural={setShowCultural}
        show={show}
        showOwned={showOwned}
        setShowOwned={setShowOwned}
      />
    
      <Calendar />
     

      {showCultural ? <Cultural /> : null}
      
      {show ? <Enterprise /> : null}

      {showOwned ? <OwnedPriorities /> : null}


    </div>
  );
};

export default Dashboard;
