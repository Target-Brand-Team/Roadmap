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
          {/* === ENTERPRISE TGT === */}
          {tgtToggle ? (
            <h3
              className="bg-sky-900 text-white font-thin rounded text-center mb- py-2 cursor-pointer hover:bg-sky-950"
              onClick={() => setTgtToggle(false)}
            >
              TGT Forward & Inclusive Initiatives
            </h3>
          ) : (
            <div className="shadow h-[170px] flex relative ">
              <span
                className="vertical text-[13px] text-white bg-sky-900 hover:bg-sky-950 text-center font-semibold p-2 py-3  rounded-tr-md rounded-br-md cursor-pointer"
                onClick={() => setTgtToggle(true)}
              >
                TGT Forward & Inclusive 
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

          {/* === ENTERPRISE LTO === */}
          {ltoToggle ? (
            <h3
              className="bg-sky-800 text-white font-thin rounded text-center py-2 cursor-pointer hover:bg-sky-950"
              onClick={() => setLtoToggle(false)}
            >
              LTO
            </h3>
          ) : (
            <div className="shadow h-[160px] flex relative ">
              <span
                className="vertical text-[13px] text-white bg-sky-800  hover:bg-sky-950 text-center font-semibold p-2 flex justify-center items-center rounded-tr-md rounded-br-md cursor-pointer"
                onClick={() => setLtoToggle(true)}
              >
                LTO
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

          {/* === ENTERPRISE STRATEGY === */}
          {strategicToggle ? (
            <h3
              className="bg-sky-700 text-white font-thin rounded text-center mb-1 py-2 cursor-pointer hover:bg-sky-950"
              onClick={() => setStrategicToggle(false)}
            >
              Strategic Partnership
            </h3>
          ) : (
            <div className="shadow h-[160px] flex ">
              <span className="vertical text-[13px] text-white bg-sky-700 hover:bg-sky-950 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer" 
              onClick={() => setStrategicToggle(true)}>
                Strategic Partnership
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
