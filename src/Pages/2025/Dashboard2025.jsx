import React, { useState } from "react";
import DashboardGrid from '../../components/DashboardGrid'
import Calendar from '../../components/Calendar'

const Dashboard2025 = () => {
  const [show, setShow] = useState(true);
  const [showCultural, setShowCultural] = useState(true);
  const [showOwned, setShowOwned] = useState(true);

  return (
    <div className="flex flex-col gap-2 mt-1 mx-1 h-[2200px] max-[1280px]:w-[1050px]">
      <div className="bg-red-700 text-white rounded-sm py-1 px-3 font-bold text-lg flex justify-center">
        2025
      </div>
      <DashboardGrid />

      <Calendar />
    </div>
  )
}

export default Dashboard2025