import React from "react";
import EnterpriseRollover from "../../components/Rollover/EnterpriseRollover";
import { useState } from "react";
import { ENTERPRISE_PRIORITIES } from "../../Database_2024/2024/Enterprise_Priori_Data";
import OwnedPriorities from "./OwnedPriorities";
import { IoClose } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi2";

const Enterprise = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(ENTERPRISE_PRIORITIES);
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
      <div className="bg-white flex">
        <section className="w-full flex flex-col gap-1">
          {/* ====================================== ENTERPRISE LTO === */}

          <div
            className="bg-sky-900 flex items-center text-white font-thin rounded text-center py-2 cursor-pointer hover:bg-sky-950 group"
            onClick={() => setLtoToggle(!ltoToggle)}
          >
            <HiChevronDown className="ml-6 text-xl" />
            {/* Tootip */}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-900 text-white text-sm rounded shadow-xl absolute bottom- left-1 px-2 py-5 rotate  w-28 h-48">
              LTO (Limited Time Offering), is a Target exclusive and time-based cross-category collection drop
            </span>
            <h3 className="ml-[470px]">LTO</h3>
          </div>

          <div className="shadow h-[160px] flex relative ">
            <span
              className="vertical text-[13px] text-white bg-sky-900  hover:bg-sky-950 text-center font-semibold p-2 flex justify-center items-center rounded-tr-md rounded-br-md cursor-pointer group"
              onClick={() => setLtoToggle(true)}
            >
              LTO
            </span>

            {/* {data?.LTO?.map((item, index) => (
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
              ))} */}
          </div>

          {/* ============================== ENTERPRISE TGT === */}

          <div
            className="bg-sky-800 flex items-center text-white font-thin rounded mb- py-2 cursor-pointer hover:bg-sky-950 group"
            onClick={() => setTgtToggle(!tgtToggle)}
          >
            <HiChevronDown className="ml-6 text-xl" />
            {/* Tootip */}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-800 text-white text-sm text-center rounded shadow-xl absolute bottom- left-1 px-2 py-5 rotate  w-28 h-48">
              Enterprise Initiatives related to Target's commitments to
              sustainability and inclusive
            </span>

            <h3 className="ml-[380px]">TGT Forward & Inclusive Initiatives</h3>
          </div>

          {tgtToggle ? (
            <div className="flex flex-col gap-1">
              {/* ==================== ALWAYS ON = */}
              <div className="shadow h-[170px] flex relative">
                <span
                  className="vertical text-[13px] text-white bg-sky-800 hover:bg-sky-950 text-center font-semibold p-2 py-3  rounded-tr-md rounded-br-md cursor-pointer group"
                  onClick={() => setTgtToggle(true)}
                >
                  Always On
                </span>

                {/* {data?.TGT?.map((item, index) => (
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
                ))} */}
              </div>

              {/* ==================== MOMENTS = */}
              <div className="shadow h-[170px] flex relative">
                <span
                  className="vertical text-[13px] text-white bg-sky-800 hover:bg-sky-950 text-center font-semibold p-2 py-3  rounded-tr-md rounded-br-md cursor-pointer group"
                  onClick={() => setTgtToggle(true)}
                >
                  Moments
                </span>

                {data?.MOMENTS?.map((item, index) => (
                <div
                  key={item.id}
                  className="absolute bg-blue-400"
                  onClick={() => {
                    setVariable("MOMENTS");
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
            </div>
          ) : null}

          {/* =================================== ENTERPRISE STRATEGY === */}
          <div
            className="bg-sky-700 flex items-center text-white font-thin rounded text-center mb-1 py-2 cursor-pointer hover:bg-sky-950 group"
            onClick={() => setStrategicToggle(!strategicToggle)}
          >
            <HiChevronDown className="ml-6 text-xl" />
            {/* Tootip */}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-700 text-white text-sm rounded shadow-xl absolute bottom- left-1 px-2 py-5 rotate  w-28 h-48">
              Strategic Partnership are business partnership initiatives
            </span>
            <h3 className="ml-[420px]">Strategic Partnership</h3>
          </div>

          {strategicToggle ? (
            <div className="flex flex-col gap-1">
              {/* ==== DISNEY */}
              <div className="shadow h-[160px] flex ">
                <span
                  className="vertical text-[13px] text-white bg-sky-700 hover:bg-sky-950 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                  onClick={() => setStrategicToggle(false)}
                >
                  Disney
                </span>

                {data?.DISNEY?.map((item, index) => (
                  <div
                    key={item.id}
                    className="absolute"
                    onClick={() => {
                      setVariable("DISNEY");
                      setDataIndexEnterprise(index);
                      setModal(!modal);
                      console.log(item);
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

              {/* ==== APPLE */}
              <div className="shadow h-[160px] flex ">
                <span
                  className="vertical text-[13px] text-white bg-sky-600 hover:bg-sky-950 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                  onClick={() => setStrategicToggle(false)}
                >
                  Apple
                </span>

                {data?.APPLE?.map((item, index) => (
                  <div
                    key={item.id}
                    className="absolute"
                    onClick={() => {
                      setVariable("APPLE");
                      setDataIndexEnterprise(index);
                      setModal(!modal);
                      console.log(item);
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

              {/* ==== LEVI'S */}
              <div className="shadow h-[160px] flex ">
                <span
                  className="vertical text-[13px] text-white bg-sky-500 hover:bg-sky-950 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                  onClick={() => setStrategicToggle(false)}
                >
                  Levi's
                </span>

                {data?.LEVI?.map((item, index) => (
                  <div
                    key={item.id}
                    className="absolute"
                    onClick={() => {
                      setVariable("LEVI");
                      setDataIndexEnterprise(index);
                      setModal(!modal);
                      console.log(item);
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

              {/* ==== ULTA */}
              <div className="shadow h-[160px] flex ">
                <span
                  className="vertical text-[13px] text-white bg-sky-400 hover:bg-sky-950 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                  onClick={() => setStrategicToggle(false)}
                >
                  Ulta Beauty
                </span>

                {data?.ULTA?.map((item, index) => (
                  <div
                    key={item.id}
                    className="absolute"
                    onClick={() => {
                      setVariable("ULTA");
                      setDataIndexEnterprise(index);
                      setModal(!modal);
                      console.log(item);
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

              {/* ==== NAT */}
              <div className="shadow h-[160px] flex ">
                <span
                  className="vertical text-[13px] text-white bg-sky-400 hover:bg-sky-950 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                  onClick={() => setStrategicToggle(false)}
                >
                  NAT
                </span>

                {data?.NAT?.map((item, index) => (
                  <div
                    key={item.id}
                    className="absolute"
                    onClick={() => {
                      setVariable("NAT");
                      setDataIndexEnterprise(index);
                      setModal(!modal);
                      console.log(item);
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
            </div>
          ) : null}
        </section>
      </div>

      {/* ================================== MODAL ENTERPRISE === */}
      {modal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[900px] h-[350px] p-1 rounded-lg shadow-xl mt-14">
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
                    <div></div>
                    <h3 className="text-3xl mt-3 font-semibold leading-7 text-gray-500">
                      {data[variable][dataIndexEnterprise].label}
                    </h3>
                  </div>
                  <div className="mt-5 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="px-4 py-6 flex gap-[230px] sm:px-0">
                        <dt className="ml-6 font-semibold leading-6 text-gray-900">
                          Description:
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-500 flex flex-col   ">
                          <span>
                            {data[variable][dataIndexEnterprise].description01}
                          </span>
                          <span>
                            {data[variable][dataIndexEnterprise].description02}
                          </span>
                          <span>
                            {data[variable][dataIndexEnterprise].description03}
                          </span>
                          <span>
                            {data[variable][dataIndexEnterprise].description04}
                          </span>
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
};

export default Enterprise;
