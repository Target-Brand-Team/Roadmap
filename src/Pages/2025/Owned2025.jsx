import React, { useState } from "react";
import OwnedBrandRollover from "../../components/Rollover/OwnedBrandRollover";
import { IoClose } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";
import { OWNED_BRAND_DATA_2025 } from './../../Database_2024/2025/OwnedData2025';


const Owned2025 = () => {
const [ownedData, setownedData] = useState(OWNED_BRAND_DATA_2025);
  const [dataIndexOwnedBrand, setDataIndexOwnedBrand] = useState(null);
  const [ownedVariable, setOwnedVariable] = useState("");
  const [modal, setModal] = useState(false);
  const [priorityToggle, setPriorityToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);
  const [essentialToggle, setEssentialToggle] = useState(false);
  const [foodToggle, setFoodToggle] = useState(false);
  const [hardlinesToggle, setHardlinesToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);

    return (
        <>
          <h3 className="bg-green-950 text-white text-lg font rounded text-center mb-[-6px] py-2">
            Owned Brand Priorities
          </h3>
          <div className="bg-white h-[1500px] w-full flex mb-10">
            <section className="w-full flex flex-col gap-1">
              {/* ===================================== PORTFOLIO PRIORITIES */}
              {priorityToggle ? (
                <div
                  className="bg-green-900 flex items-center text-white hover:bg-green-950 text-th font-thin rounded text-center py-2 cursor-pointer"
                  onClick={() => setPriorityToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[420px]">Portfolio Priorities</h3>
                </div>
              ) : (
                <div className="shadow h-48 flex flex-wrap relative">
                  <span
                    className="vertical text-[13px] text-white bg-green-900 hover:bg-green-950 text-center font-semibold p-2 flex justify-center items-center rounded-tr-md rounded-br-md cursor-pointer"
                    onClick={() => setPriorityToggle(true)}
                  >
                    Portfolio Priorities
                  </span>
                  {/* {ownedData?.map((item) => (
                 <div key={item.id} className="absolute">
                 <OwnedBrandRollover 
                 width={item?.width}
                 height="25px"
                 left={item.left}
                 top={item?.top}
                 text={item.label}
                 backgroundColor={item.color}
                 image={item.image}
                 />             
                  </div>
              ))} */}
                </div>
              )}
    
              {/* ===================================== ACCESSORIES & APPAREL */}
              {accessoriesToggle ? (
                <div
                  className="bg-green-800 flex items-center text-white hover:bg-green-950 text-th font-thin rounded text-center py-2 cursor-pointer"
                  onClick={() => setAccessoriesToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[410px]">Accessories & Apparel</h3>
                </div>
              ) : (
                <div className="shadow h-48 flex flex-wrap relative">
                  <span
                    className="vertical text-[13px] text-white bg-green-800 hover:bg-green-950 text-center font-semibold p-2 flex justify-center items-center rounded-tr-md rounded-br-md cursor-pointer"
                    onClick={() => setAccessoriesToggle(true)}
                  >
                    Accessories & Apparel
                  </span>
                  {ownedData?.ACCESSORIES?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute"
                      onClick={() => {
                        setDataIndexOwnedBrand(index);
                        setModal(!modal);
                        setOwnedVariable("ACCESSORIES");
                      }}
                    >
                      <OwnedBrandRollover
                        width={item?.width}
                        height="40px"
                        left={item.left}
                        top={item?.top}
                        text={item.label}
                        backgroundColor={item.color}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>
              )}
    
              {/* ======================================== ESSENTIALS & BEAUTY */}
              {essentialToggle ? (
                <div
                  className="bg-green-700 flex items-center text-white hover:bg-green-950 text-th font-thin rounded text-center py-2 cursor-pointer"
                  onClick={() => setEssentialToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[420px]">Essentials & Beauty</h3>
                </div>
              ) : (
                <div className="shadow h-48 flex flex-wrap relative">
                  <span
                    className="vertical text-[13px] text-white bg-green-700 text-center font-semibold p-2 hover:bg-green-950 cursor-pointer rounded-tr-md rounded-br-md"
                    onClick={() => setEssentialToggle(true)}
                  >
                    Essentials & Beauty
                  </span>
                  {ownedData?.ESSENTIALS?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute"
                      onClick={() => {
                        setDataIndexOwnedBrand(index);
                        setModal(!modal);
                        setOwnedVariable("ESSENTIALS");
                      }}
                    >
                      <OwnedBrandRollover
                        width={item?.width}
                        height="40px"
                        left={item.left}
                        top={item?.top}
                        text={item.label}
                        backgroundColor={item.color}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>
              )}
    
              {/* ============================ FOOD & BEVERAGE */}
              {foodToggle ? (
                <div
                  className="bg-green-600 flex items-center text-white hover:bg-green-950 text-th font-thin rounded text-center py-2 cursor-pointer"
                  onClick={() => setFoodToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[425px]">Food & Beverage</h3>
                </div>
              ) : (
                <div className="shadow h-[230px] flex flex-wrap relative">
                  <span
                    className="vertical text-[13px] text-white bg-green-600 text-center font-semibold p-2 hover:bg-green-950 cursor-pointer rounded-tr-md rounded-br-md"
                    onClick={() => setFoodToggle(true)}
                  >
                    Food & Beverage
                  </span>
                  {ownedData?.FOOD?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute"
                      onClick={() => {
                        setDataIndexOwnedBrand(index);
                        setModal(!modal);
                        setOwnedVariable("FOOD");
                      }}
                    >
                      <OwnedBrandRollover
                        width={item?.width}
                        height="40px"
                        left={item.left}
                        top={item?.top}
                        text={item.label}
                        backgroundColor={item.color}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>
              )}
    
              {/* ================================= HARDLINES */}
              {hardlinesToggle ? (
                <div
                  className="bg-green-500 flex items-center text-white hover:bg-green-950 text-th font-thin rounded text-center py-2 cursor-pointer"
                  onClick={() => setHardlinesToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[450px]">Hardlines</h3>
                </div>
              ) : (
                <div className="shadow h-48 flex flex-wrap relative">
                  <span
                    className="vertical text-[13px] text-white bg-green-500 text-center font-semibold p-2 hover:bg-green-950 cursor-pointer rounded-tr-md rounded-br-md"
                    onClick={() => setHardlinesToggle(true)}
                  >
                    Hardlines
                  </span>
                  {ownedData?.HARDLINES?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute"
                      onClick={() => {
                        setDataIndexOwnedBrand(index);
                        setModal(!modal);
                        setOwnedVariable("HARDLINES");
                      }}
                    >
                      <OwnedBrandRollover
                        width={item?.width}
                        height="40px"
                        left={item.left}
                        top={item?.top}
                        text={item.label}
                        backgroundColor={item.color}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>
              )}
    
              {/* ======================================= HOME */}
              {homeToggle ? (
                <div className="bg-green-400 flex items-center text-white hover:bg-green-950 text-th font-thin rounded text-center py-2 cursor-pointer"
                onClick={() => setHomeToggle(false)}>
                  <HiChevronDown className="ml-6 text-xl" />
                <h3 className="ml-[460px]"
                 
                >
                  Home
                </h3>
                </div>
              ) : (
                <div className="shadow h-64 flex flex-wrap relative">
                  <span
                    className="vertical text-[13px] text-white bg-green-400 text-center font-semibold p-2 hover:bg-green-950 cursor-pointer rounded-tr-md rounded-br-md"
                    onClick={() => setHomeToggle(true)}
                  >
                    Home
                  </span>
                  {ownedData?.HOME?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute"
                      onClick={() => {
                        setDataIndexOwnedBrand(index);
                        setModal(!modal);
                        setOwnedVariable("HOME");
                      }}
                    >
                      <OwnedBrandRollover
                        width={item?.width}
                        height="40px"
                        left={item.left}
                        top={item?.top}
                        text={item.label}
                        backgroundColor={item.color}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
    
            {/* === MODAL =============================== */}
            {modal ? (
              //  === FADE ===
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <d
                  iv
                  className="bg-white w-[900px] h-[650px] p-1 rounded-lg shadow-xl mt-14"
                >
                  <div className="flex justify-end">
                    <IoClose
                      className="text-[35px] text-gray-700 cursor-pointer"
                      onClick={() => setModal(!modal)}
                    />
                  </div>
                  {
                    <>
                      <div className="px-8">
                        <div className="px-4 mt-[-18px] sm:px-0 flex items-center gap-5">
                          <div>
                            <img
                              src={
                                ownedData[ownedVariable][dataIndexOwnedBrand]?.image
                              }
                              alt=""
                              className="w-20"
                            />
                          </div>
                          <h3 className="text-3xl font-semibold leading-7 text-gray-500">
                            {ownedData[ownedVariable][dataIndexOwnedBrand]?.label}
                          </h3>
                        </div>
                        <div className="mt-5 border-t border-gray-100">
                          <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-24 sm:px-0">
                              <span className=" font-semibold leading-6 text-gray-900">
                                Pyramids:
                              </span>
                              <dd className="mt-1 leading-6 text-gray-700 ">
                                <div className="flex gap-2">
                                  <span className="font-semibold ml-2">Primary: </span>
                                  {
                                    ownedData[ownedVariable][dataIndexOwnedBrand]
                                      ?.pyramid?.primary
                                  }
                                  <span className="font-semibold ml-8">
                                    Secondary:
                                  </span>
                                  {
                                    ownedData[ownedVariable][dataIndexOwnedBrand]
                                      ?.pyramid?.secondary
                                  }
                                </div>
                              </dd>
                            </div>
                            <div className="px-4 py-4 flex gap-[280px] sm:px-0">
                              <dt className="font-semibold leading-6 text-gray-900">
                                Goal:
                              </dt>
                              <dd className="mt-1 leading-6 text-gray-500 ">
                                {
                                  ownedData[ownedVariable][dataIndexOwnedBrand]
                                    ?.goal
                                }
                              </dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-24 sm:px-0">
                              <dt className="font-semibold leading-6 text-gray-900">
                                What's happening with the Brand:
                              </dt>
                              <dd className="mt-1 ml-2 leading-6 text-gray-500 ">
                              {
                                  ownedData[ownedVariable][dataIndexOwnedBrand]
                                    ?.what_happen
                                }
                              </dd>
                            </div>
                            <div className="px-4 py-6 flex gap-[270px] sm:px-0">
                              <dt className="font-semibold leading-6 text-gray-900">
                                When:
                              </dt>
                              <dd className="mt-1 leading-6 text-gray-500 ">
                                {
                                  ownedData[ownedVariable][dataIndexOwnedBrand]
                                    ?.when
                                }
                              </dd>
                            </div>
                            <div className="px-4 py-4 flex gap-[230px] sm:px-0">
                              <dt className="font-semibold leading-6 text-gray-900">
                                Description:
                              </dt>
                              <dd className="mt-1 leading-6 text-gray-500  ">
                                {
                                  ownedData[ownedVariable][dataIndexOwnedBrand]
                                    ?.description
                                }
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </>
                  }
                </d>
              </div>
            ) : null}
          </div>
        </>
      );
}

export default Owned2025