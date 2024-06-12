import React, {useState} from 'react'
import Calendar from '../../components/Calendar'
import DashboardGrid from '../../components/DashboardGrid'
import Cultural2026 from './Cultural2026'
import Enterprise2026 from './Enterprise2026'
import Owned2026 from './Owned2026'


const Dashboard2026 = () => {
    const [show, setShow] = useState(true);
  const [showCultural, setShowCultural] = useState(true);
  const [showOwned, setShowOwned] = useState(true);


  return (
    <div className="flex flex-col gap-2 mt-1 mx-1 h-[2200px] max-[1280px]:w-[1050px]">
      <div className="bg-red-700 text-white rounded-sm py-1 px-3 font-bold text-lg flex justify-center">
        2026
      </div>
      <DashboardGrid 
       showCultural={showCultural}
       setShow={setShow}
       setShowCultural={setShowCultural}
       show={show}
       showOwned={showOwned}
       setShowOwned={setShowOwned}/>

      <Calendar />

      {showCultural ? <Cultural2026 /> : null}
      
      {show ? <Enterprise2026 /> : null}

      {showOwned ? <Owned2026 /> : null}
    </div>
  )
}

export default Dashboard2026