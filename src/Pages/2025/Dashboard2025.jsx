import React, { useState } from "react";
import DashboardGrid from '../../components/DashboardGrid'
import Calendar from '../../components/Calendar'
import Cultural2025 from './Cultural2025';
import Enterprise2025 from "./Enterprise2025";
import Owned2025 from "./Owned2025";

const Dashboard2025 = () => {
  const [show, setShow] = useState(true);
  const [showCultural, setShowCultural] = useState(true);
  const [showOwned, setShowOwned] = useState(true);

  return (
    <div className="flex flex-col gap-2 mt-1 mx-1 h-[2200px] max-[1280px]:w-[1050px]">
      <div className="bg-red-700 text-white rounded-sm py-1 px-3 font-bold text-lg flex justify-center">
        2025
      </div>
      <DashboardGrid 
       showCultural={showCultural}
       setShow={setShow}
       setShowCultural={setShowCultural}
       show={show}
       showOwned={showOwned}
       setShowOwned={setShowOwned}/>

      <Calendar />

      {showCultural ? <Cultural2025 /> : null}
      
      {show ? <Enterprise2025 /> : null}

      {showOwned ? <Owned2025 /> : null}
    </div>
  )
}

export default Dashboard2025