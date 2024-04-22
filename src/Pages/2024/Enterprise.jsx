import React from "react";
import EnterpriseRollover from "../../components/Rollover/EnterpriseRollover";
import { useState } from "react";
import { ENTERPRISE_PRIORITIES } from "../../Database_2024/Enterprise_Priori_Data";
import OwnedPriorities from "./OwnedPriorities";

const Enterprise = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(ENTERPRISE_PRIORITIES);
  const [dataIndexEnterprise, setDataIndexEnterprise] = useState(null);
  const [variable, setVariable] = useState("");


  return (
    <main className="flex flex-col w-full">
      <h3 className="bg-sky-950 text-white font-medium rounded text-center text-lg mb-1 py-2">Enterprise Priorities</h3>
      <div className="bg-white h-[450px] flex">
        <div className=" bg-teal-400 w-8 flex flex-col gap-1">
          <span className="flex-1 vertical text-[13px] text-white bg-sky-900 text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
            TGT & Initiatives
          </span>

          <span className="flex-1 vertical text-[13px] text-white bg-sky-800 text-center font-semibold p-2 flex justify-center items-center rounded-tr-md rounded-br-md">
            LTO
          </span>

          <span className="flex-1 vertical text-[13px] text-white bg-sky-700 text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
            Strategy Partnership
          </span>
        </div>


        <section className="w-full flex flex-col ">
        {/* === ENTERPRISE TGT === */}
          <div className="shadow flex-1 relative">
            {data?.TGT?.map((item, index) => (
              <div
                key={item.id} className="absolute"
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

          {/* === ENTERPRISE LTO === */}
          <div className="shadow flex-1 ">
            {data?.LTO?.map((item, index) => (
              <div
                key={item.id} className="absolute"
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

          {/* === ENTERPRISE STRATEGY === */}
          <div className="shadow flex-1 flex flex-wrap">
            {data?.STRATEGY?.map((item, index) => (
              <div
                key={item.id} className="absolute"
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
        </section>
      </div>


      {/* === ENTERPRISE DETAILS === */}
      {/* <div className="w-full h-[270px] bg-white mt-2 p-1 flex">
         {modal ? ( 
          <div className="bg-sky-50 w-full">
            {
              <>
                <div className="m-2">
                  <h3 className="text-3xl font-semibold leading-7 text-gray-600">
                    {data[variable][dataIndexEnterprise]?.label}
                  </h3>
                   <p>{data.TGT[dataIndexEnterprise].description}</p> 
                </div>
              </>
            }
          </div>
        ) : null}
      </div> */}
      
    </main>
  );
};

export default Enterprise;
