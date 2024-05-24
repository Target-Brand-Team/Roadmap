import { createContext, useState } from "react";

export const ToggleContext = createContext();

const ToggleContextPage = ({ children }) => {
  
//  ======= ENTERPRISE ==
  const [tgtToggle, setTgtToggle] = useState(false);
  const [ltoToggle, setLtoToggle] = useState(false);
  const [strategicToggle, setStrategicToggle] = useState(false);
  const [mainBarToggle, setMainBarToggle] = useState(true);
  const [disneyToggle, setDisneyToggle] = useState(false);
  const [appleToggle, setAppleToggle] = useState(false);
  const [levisToggle, setLevisToggle] = useState(false);
  const [ultaToggle, setUltaToggle] = useState(false);
  const [nationalToggle, setNationalToggle] = useState(false);
  const [alwaysToggle, setAlwaysToggle] = useState(false);
  const [momentsToggle, setMomentsToggle] = useState(false);

  // ======== OWNED PRIORITY ==
  const [priorityToggle, setPriorityToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);
  const [essentialToggle, setEssentialToggle] = useState(false);
  const [foodToggle, setFoodToggle] = useState(false);
  const [hardlinesToggle, setHardlinesToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [topBarToggle, setTopBarToggle] = useState(true);

  const value = {
    tgtToggle,
    setTgtToggle,
    ltoToggle,
    setLtoToggle,
    strategicToggle,
    setStrategicToggle,
    mainBarToggle,
    setMainBarToggle,
    disneyToggle,
    setDisneyToggle,
    appleToggle,
    setAppleToggle,
    levisToggle,
    setLevisToggle,
    ultaToggle,
    setUltaToggle,
    nationalToggle,
    setNationalToggle,
    alwaysToggle,
    setAlwaysToggle,
    momentsToggle,
    setMomentsToggle,
    priorityToggle, setPriorityToggle,
    accessoriesToggle, setAccessoriesToggle,
    essentialToggle, setEssentialToggle,
    foodToggle, setFoodToggle,
    hardlinesToggle, setHardlinesToggle,
    homeToggle, setHomeToggle,
    topBarToggle, setTopBarToggle
  }

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export default ToggleContextPage;
