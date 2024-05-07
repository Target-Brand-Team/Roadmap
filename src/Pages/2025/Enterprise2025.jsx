import React from "react";
import EnterpriseRollover from "../../components/Rollover/EnterpriseRollover";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi2";
import { ENTERPRISE_PRIORITIES_2025 } from './../../Database_2024/2025/EnterpriseData2025';

const Enterprise2025 = () => {
const [modal, setModal] = useState(false);
  const [data, setData] = useState(ENTERPRISE_PRIORITIES_2025);
  const [dataIndexEnterprise, setDataIndexEnterprise] = useState(null);
  const [variable, setVariable] = useState("");
  const [tgtToggle, setTgtToggle] = useState(false);
  const [ltoToggle, setLtoToggle] = useState(false);
  const [strategicToggle, setStrategicToggle] = useState(false);
  
    return (
        <main className="flex flex-col w-full">
          <h3 className="bg-sky-950 text-white rounded text-center text-lg mb-1 py-2">
            Enterprise Priorities
          </h3>
          <div className="bg-white h-[450px] flex">
            <section className="w-full flex flex-col gap-1">
              {/* ============================== ENTERPRISE TGT === */}
              {tgtToggle ? (
                <div
                  className="bg-sky-900 flex items-center text-white font-thin rounded mb- py-2 cursor-pointer hover:bg-sky-950"
                  onClick={() => setTgtToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[380px]">
                    TGT Forward & Inclusive Initiatives
                  </h3>
                </div>
              ) : (
                <div className="shadow h-[170px] flex relative">
                  <span
                    className="vertical text-[13px] text-white bg-sky-900 hover:bg-sky-950 text-center font-semibold p-2 py-3  rounded-tr-md rounded-br-md cursor-pointer group"
                    onClick={() => setTgtToggle(true)}
                  >
                    TGT Forward
                    {/* Tootip */}
                    <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-900 text-white rounded shadow-xl absolute top-7 left-1 px-8 py-1 rotate-90 w-48 h-28">
                      Enterprise Initiatives related to Target's commitments to
                      sustainability and inclusive
                    </span>
                  </span>
    
                  {data?.TGT?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute bg-blue-400"
                      onClick={() => {
                        setVariable("TGT");
                        setDataIndexEnterprise(index);
                        setModal(!modal);
                      }}
                    >
                      <EnterpriseRollover
                        width={item?.width}
                        height="40px"
                        left={item?.left}
                        top={item.top}
                        text={item.label}
                        backgroundColor={item.color}
                      />
                    </div>
                  ))}
                </div>
              )}
    
              {/* ====================================== ENTERPRISE LTO === */}
              {ltoToggle ? (
                <div
                  className="bg-sky-800 flex items-center text-white font-thin rounded text-center py-2 cursor-pointer hover:bg-sky-950"
                  onClick={() => setLtoToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[470px]">LTO</h3>
                </div>
              ) : (
                <div className="shadow h-[160px] flex relative ">
                  <span
                    className="vertical text-[13px] text-white bg-sky-800  hover:bg-sky-950 text-center font-semibold p-2 flex justify-center items-center rounded-tr-md rounded-br-md cursor-pointer group"
                    onClick={() => setLtoToggle(true)}
                  >
                    LTO
                    {/* Tootip */}
                    <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-800 text-white rounded shadow-xl absolute     left-1 px-8 py-1 rotate-90 w-48 h-28">
                      LTO (Limited Time Offering) is a Target exclusive and
                      time-based cross-category collection drop
                    </span>
                  </span>
    
                  {data?.LTO?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute"
                      onClick={() => {
                        setVariable("LTO");
                        setDataIndexEnterprise(index);
                        setModal(!modal);
                      }}
                    >
                      <EnterpriseRollover
                        width={item?.width}
                        height="40px"
                        left={item?.left}
                        top={item.top}
                        text={item.label}
                        backgroundColor={item.color}
                      />
                    </div>
                  ))}
                </div>
              )}
    
              {/* =================================== ENTERPRISE STRATEGY === */}
              {strategicToggle ? (
                <div
                  className="bg-sky-700 flex items-center text-white font-thin rounded text-center mb-1 py-2 cursor-pointer hover:bg-sky-950"
                  onClick={() => setStrategicToggle(false)}
                >
                  <HiChevronDown className="ml-6 text-xl" />
                  <h3 className="ml-[420px]">Strategic Partnership</h3>
                </div>
              ) : (
                <div className="shadow h-[160px] flex ">
                  <span
                    className="vertical text-[13px] text-white bg-sky-700 hover:bg-sky-950 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer group"
                    onClick={() => setStrategicToggle(true)}
                  >
                    Strategic Partnerships
                    {/* Tootip */}
                    <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-700 text-white rounded shadow-xl absolute bottom-2 left-1 px-8 py-5 rotate-90  w-48 h-28">
                      Strategic Partnership are business partnership initiatives
                    </span>
                  </span>
    
                  {data?.STRATEGY?.map((item, index) => (
                    <div
                      key={item.id}
                      className="absolute"
                      onClick={() => {
                        setVariable("STRATEGY");
                        setDataIndexEnterprise(index);
                        setModal(!modal);
                      }}
                    >
                      <EnterpriseRollover
                        width={item?.width}
                        height="40px"
                        left={item?.left}
                        top={item.top}
                        text={item.label}
                        backgroundColor={item.color}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
    
          {/* ================================== MODAL ENTERPRISE === */}
          {modal ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-[900px] h-[650px] p-1 rounded-lg shadow-xl mt-14">
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
                          {/* <img
                              src={
                                ownedData[ownedVariable][dataIndexOwnedBrand]?.image
                              }
                              alt=""
                              className="w-20"
                            /> */}
                        </div>
                        <h3 className="text-3xl font-semibold leading-7 text-gray-500">
                          {data[variable][dataIndexEnterprise]?.label}
                        </h3>
                      </div>
                      <div className="mt-5 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-24 sm:px-0">
                            <span className=" font-semibold leading-6 text-gray-900">
                              Pyramids
                            </span>
                            <dd className="mt-1 leading-6 text-gray-700 ">
                              <div className="flex gap-2">
                                <span className="font-semibold">Primary: </span>
                                {/* {
                                    ownedData[ownedVariable][dataIndexOwnedBrand]
                                      ?.pyramid?.primary
                                  } */}
                                <span className="font-semibold ml-8">
                                  Secondary:
                                </span>
                                {/* {
                                    ownedData[ownedVariable][dataIndexOwnedBrand]
                                      ?.pyramid?.secondary
                                  } */}
                              </div>
                            </dd>
                          </div>
                          <div className="px-4 py-6 flex gap-[280px] sm:px-0">
                            <dt className="font-semibold leading-6 text-gray-900">
                              Goal
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-500 ">
                              {/* {
                                  ownedData[ownedVariable][dataIndexOwnedBrand]
                                    ?.goal
                                } */}
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-24 sm:px-0">
                            <dt className="font-semibold leading-6 text-gray-900">
                              What's happening with the Brand?
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-500 ">
                              Launch
                            </dd>
                          </div>
                          <div className="px-4 py-6 flex gap-[270px] sm:px-0">
                            <dt className="font-semibold leading-6 text-gray-900">
                              When
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-500 ">
                              {/* {
                                  ownedData[ownedVariable][dataIndexOwnedBrand]
                                    ?.when
                                } */}
                            </dd>
                          </div>
                          <div className="px-4 py-6 flex gap-[230px] sm:px-0">
                            <dt className="font-semibold leading-6 text-gray-900">
                              Description
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-500  ">
                              {/* {
                                  ownedData[ownedVariable][dataIndexOwnedBrand]
                                    ?.description
                                } */}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </>
                }
              </div>
            </div>
          ) : null}
        </main>
      );
}

export default Enterprise2025