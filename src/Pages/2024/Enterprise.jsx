import React from "react";
import EnterpriseRollover from "../../components/Rollover/EnterpriseRollover";
import { useState } from "react";
import { ENTERPRISE_PRIORITIES } from "../../Database/Enterprise_Priori_Data";

const Enterprise = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(ENTERPRISE_PRIORITIES);
  const [dataIndexEnterprise, setDataIndexEnterprise] = useState(null);
  const [variable, setVariable] = useState('');

  console.log(data);


  return (
    <main className="flex flex-col w-[1740px]">
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

        {/* === ENTERPRISE TGT === */}
        <section className="w-screen flex flex-col ">
          <div className="shadow flex-1 flex flex-wrap">
            {data?.TGT?.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  setVariable('TGT')
                  setDataIndexEnterprise(index);
                  setModal(!modal);
                }}
              >
                <EnterpriseRollover
                  width={item?.width}
                  height="40px"
                  marginLeft={item?.marginLeft}
                  marginTop="5px"
                  text={item.label}
                  backgroundColor={item.color}
                />
              </div>
            ))}
          </div>

          {/* === ENTERPRISE LTO === */}
          <div className="shadow flex-1 flex flex-wrap">
            {data?.LTO?.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  setVariable('LTO')
                  setDataIndexEnterprise(index);
                  setModal(!modal);
                }}
              >
                <EnterpriseRollover
                  width={item?.width}
                  height="40px"
                  marginLeft={item?.marginLeft}
                  marginTop="5px"
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
                key={item.id}
                onClick={() => {
                  setVariable('STRATEGY')
                  setDataIndexEnterprise(index);
                  setModal(!modal);
                }}
              >
                <EnterpriseRollover
                  width={item?.width}
                  height="40px"
                  marginLeft={item?.marginLeft}
                  marginTop="5px"
                  text={item.label}
                  backgroundColor={item.color}
                />
              </div>
            ))}
          </div>
        </section>
      </div>


      {/* === ENTERPRISE DETAILS === */}
      <div className="w-full h-[300px] bg-white mt-2 p-1 flex">
        {modal ? (
          <div className="bg-red-200 w-full">
            {
              <>
                <div>
                  <span>Brand</span>
                </div>
                <h3>{data[variable][dataIndexEnterprise].label}</h3>
                {/* <p>{data.TGT[dataIndexEnterprise].description}</p> */}
              </>
            }
          </div>
        ) :( null)}
      </div>
     

    </main>
  );
};

export default Enterprise;
