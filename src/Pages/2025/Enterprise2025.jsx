import React from "react";
import EnterpriseRollover from "../../components/Rollover/EnterpriseRollover";
import OwnedBrandRollover from "../../components/Rollover/OwnedBrandRollover";
import { useState, useContext } from "react";
import { ENTERPRISE_PRIORITIES_2025} from '../../Database_2024/2025/EnterpriseData2025'
import { IoClose } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ToggleContext } from "../../components/CONTEXT/ToggleContextPage";

const Enterprise2025 = () => {
  const {
    mainBarToggle, setMainBarToggle,
    tgtToggle,
    setTgtToggle,
    ltoToggle,
    setLtoToggle,
    strategicToggle,
    setStrategicToggle,
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
    momentsToggle,
    setMomentsToggle,
    alwaysToggle,
    setAlwaysToggle,
  } = useContext(ToggleContext);
  const [data, setData] = useState(ENTERPRISE_PRIORITIES_2025);
  const [modal, setModal] = useState(false);
  const [modalAlways, setModalAlways] = useState(false);
  const [dataIndexEnterprise, setDataIndexEnterprise] = useState(null);
  const [variable, setVariable] = useState("");
  

  return (
    <main className="flex flex-col w-full mt-[-7px]">
      <div
        className="bg-sky-950 hover:bg-cyan-900 flex items-center text-white rounded text-center text-lg mb- py-2 cursor-pointer"
        onClick={() => setMainBarToggle(!mainBarToggle)}
      >
        <h3 className="ml-[448px]">Enterprise Priorities</h3>
        {mainBarToggle ? (
          <FaMinus
            className="ml-[420px] cursor-pointer text-[16px]"
            onClick={() => setMainBarToggle(!mainBarToggle)}
          />
        ) : (
          <FaPlus
            className="ml-[420px] cursor-pointer text-[16px]"
            onClick={() => setMainBarToggle(!mainBarToggle)}
          />
        )}
      </div>

      {mainBarToggle ? (
        <div className="bg-white flex">
          <section className="w-full flex flex-col gap-1">
            {/* ====================================== ENTERPRISE LTO === */}
            <div
              className="bg-sky-900 flex items-center text-white font-thin rounded text-center py-2 mt-1 cursor-pointer hover:bg-sky-950 group"
              onClick={() => setLtoToggle(!ltoToggle)}
            >
              <HiChevronDown className="ml-2 text-xl" />
              {/* Tootip */}
              <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-900 text-white text-sm rounded shadow-xl absolute bottom- left-1 px-2 py-5 rotate  w-28 h-48">
                LTO (Limited Time Offering), is a Target exclusive and
                time-based cross-category collection drop
              </span>
              <h3 className="ml-[485px]">LTO</h3>
            </div>

            {ltoToggle ? (
              <div className="shadow h-[160px] flex relative ">
                <div
                  className="vertical text-[13px] text-white bg-sky-900 hover:bg-sky-950 text-center font-semibold p-2 flex justify-center items-center rounded-tr-md rounded-br-md cursor-pointer group"
                  onClick={() => setLtoToggle(false)}
                >
                  <span className="mt-14">LTO</span>
                  <HiChevronDown className="mt-8 text-xl" />
                </div>

                {data?.LTO?.map((item, index) => (
                  <div
                    key={item.id}
                    className="absolute group"
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

                    <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-500 rounded shadow-xl p-1 w-32 h-8 absolute top-[120px] left-[490px] bg-cyan-200 ">
                      Click for Details
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            {/* ====================================== TARGET FORWARD === */}

            <div
              className="bg-sky-800 flex items-center text-white font-thin rounded mb- py-2 cursor-pointer hover:bg-sky-950 group"
              onClick={() => setTgtToggle(!tgtToggle)}
            >
              <HiChevronDown className="ml-2 text-xl" />
              {/* Tootip */}
              <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-800 text-white text-sm text-center rounded shadow-xl absolute bottom- left-1 px-2 py-5 rotate  w-28 h-48">
                Enterprise Initiatives related to Target's commitments to
                sustainability and inclusivity
              </span>

              <h3 className="ml-[450px]">Target Forward</h3>
            </div>

            {tgtToggle ? (
              <div className="flex flex-col gap-1">
                {/* ============================ ALWAYS ON = */}
                {alwaysToggle ? (
                  <div
                    className="bg-cyan-600 flex items-center text-white font-thin rounded text-center mb-1 py-1 cursor-pointer hover:bg-cyan-800 group"
                    onClick={() => setAlwaysToggle(!alwaysToggle)}
                  >
                    <HiChevronDown className="ml-2 text-xl" />

                    <h3 className="ml-[465px] font-medium">Always On</h3>
                  </div>
                ) : (
                  <div className="shadow h-[170px] flex relative">
                    <div
                      className="vertical text-[13px] text-white flex bg-cyan-600 hover:bg-cyan-800 text-c enter font-semibold p-2 py-3  rounded-tr-md rounded-br-md cursor-pointer group"
                      onClick={() => setAlwaysToggle(true)}
                    >
                      <span className="mt-8">Always On</span>
                      <HiChevronDown className="mt-6 text-xl" />
                    </div>

                    {data?.ALWAYS?.map((item, index) => (
                      <div
                        key={item.id}
                        className="absolute bg-blue-400"
                        onClick={() => {
                          setVariable("ALWAYS");
                          setDataIndexEnterprise(index);
                          setModalAlways(!modalAlways);
                        }}
                      >
                        <OwnedBrandRollover
                          width={item?.width}
                          height="37px"
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

                {/* ================================ MOMENTS = */}
                {momentsToggle ? (
                  <div
                    className="bg-cyan-500 flex items-center text-white font-thin rounded text-center mb-1 py-1 cursor-pointer hover:bg-cyan-800 group"
                    onClick={() => setMomentsToggle(!momentsToggle)}
                  >
                    <HiChevronDown className="ml-2 text-xl" />

                    <h3 className="ml-[465px] font-medium">Moments</h3>
                  </div>
                ) : (
                  <div className="shadow h-[170px] flex relative">
                    <div
                      className="vertical text-[13px] text-white flex bg-cyan-500 hover:bg-cyan-800 text-center font-semibold p-2 py-3  rounded-tr-md rounded-br-md cursor-pointer group"
                      onClick={() => setMomentsToggle(true)}
                    >
                      <span className="pt-9">Moments</span>
                      <HiChevronDown className="mt-8 text-xl" />
                    </div>

                    {data?.MOMENTS?.map((item, index) => (
                      <div
                        key={item.id}
                        className="absolute bg-blue-400 group"
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

                        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-500 rounded shadow-xl p-1 w-32 h-8 absolute top-32 left-[490px] bg-cyan-200 ">
                          Click for Details
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : null}

            {/* =================================== ENTERPRISE STRATEGY === */}
            <div
              className="bg-sky-700 flex items-center text-white font-thin rounded text-center mb-1 py-2 cursor-pointer hover:bg-sky-950 group"
              onClick={() => setStrategicToggle(!strategicToggle)}
            >
              <HiChevronDown className="ml-2 text-xl" />
              {/* Tootip */}
              <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-sky-700 text-white text-sm rounded shadow-xl absolute bottom- left-1 px-2 py-5 rotate  w-28 h-48">
                Key external Partnerships that expand & enhance Target's
                presence
              </span>
              <h3 className="ml-[430px]">Strategic Partnerships</h3>
            </div>

            {strategicToggle ? (
              <div className="flex flex-col gap-1">
                
                {/* ==== DISNEY */}
                {disneyToggle ? (
                  <div
                    className="bg-sky-600 flex items-center text-white font-thin rounded text-center mt-[-3px] py-1 cursor-pointer hover:bg-sky-800 group"
                    onClick={() => setDisneyToggle(false)}
                  >
                    <HiChevronDown className="ml-2 text-xl" />
                    <h3 className="ml-[475px] font-medium ">Disney</h3>
                  </div>
                ) : (
                  <div className="shadow h-[160px] flex mt-[-3px]">
                    <div
                      className="vertical text-[13px] flex items-center text-white bg-sky-600 hover:bg-sky-800 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                      onClick={() => setDisneyToggle(true)}
                    >
                      <span className="pt-10">Disney</span>
                      <HiChevronDown className="text-xl mt-8" />
                    </div>

                    {data?.DISNEY?.map((item, index) => (
                      <div
                        key={item.id}
                        className="absolute group"
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

                        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-500 rounded shadow-xl p-1 w-32 h-8 absolute top-[120px] left-[490px] bg-cyan-200 ">
                          Click for Details
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* ==== APPLE */}
                {appleToggle ? (
                  <div
                    className="bg-sky-500 flex items-center text-white font-thin rounded text-center py-1 cursor-pointer hover:bg-sky-800 group"
                    onClick={() => setAppleToggle(false)}
                  >
                    <HiChevronDown className="ml-2 text-xl" />
                    <h3 className="ml-[479px] font-medium ">Apple</h3>
                  </div>
                ) : (
                  <div className="shadow h-[160px] flex ">
                    <div
                      className="vertical text-[13px] flex text-white bg-sky-500 hover:bg-sky-800 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                      onClick={() => setAppleToggle(true)}
                    >
                      <span className="pt-10">Apple</span>
                      <HiChevronDown className="text-xl mt-8" />
                    </div>

                    {data?.APPLE?.map((item, index) => (
                      <div
                        key={item.id}
                        className="absolute group"
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

                        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-500 rounded shadow-xl p-1 w-32 h-8 absolute top-[120px] left-[490px] bg-cyan-200 ">
                          Click for Details
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* ==== LEVI'S */}
                {levisToggle ? (
                  <div
                    className="bg-sky-400 flex items-center text-white font-thin rounded text-center py-1 cursor-pointer hover:bg-sky-800 group"
                    onClick={() => setLevisToggle(false)}
                  >
                    <HiChevronDown className="ml-2 text-xl" />
                    <h3 className="ml-[482px] font-medium ">Levi's</h3>
                  </div>
                ) : (
                  <div className="shadow h-[160px] flex ">
                    <div
                      className="vertical text-[13px] flex text-white bg-sky-400 hover:bg-sky-800 text-center font-semibold p-2 py-3 rounded-tr-md rounded-br-md cursor-pointer "
                      onClick={() => setLevisToggle(true)}
                    >
                      <span className="pt-11">Levi's</span>
                      <HiChevronDown className="text-xl mt-8" />
                    </div>

                    {data?.LEVI?.map((item, index) => (
                      <div
                        key={item.id}
                        className="absolute group"
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

                        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-500 rounded shadow-xl p-1 w-32 h-8 absolute top-[120px] left-[490px] bg-cyan-200 ">
                          Click for Details
                        </span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ) : null}
          </section>
        </div>
      ) : null}

      {/* ================================== MODAL ENTERPRISE === */}
      {modal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
          <div className="bg-white w-[900px] h-[400px] p-1 rounded-lg shadow-xl mt-14">
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
                        <dd className="mt-1 leading-6 text-gray-500 flex flex-col gap-1 ">
                          <span>
                            <b>
                              {
                                data[variable][dataIndexEnterprise]
                                  .description00
                              }
                            </b>
                          </span>
                          <span>
                            <b>
                              {
                                data[variable][dataIndexEnterprise]
                                  .description01
                              }
                            </b>
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
                          <span>
                            {data[variable][dataIndexEnterprise].description05}
                          </span>
                          <span>
                            {data[variable][dataIndexEnterprise].description06}
                          </span>
                          <span>
                            {data[variable][dataIndexEnterprise].description07}
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

      {/* ================================== MODAL ALWAYS ON === */}
      {modalAlways ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
          <div className="bg-white w-[900px] h-[350px] p-1 rounded-lg shadow-xl mt-14">
            <div className="flex justify-end">
              <IoClose
                className="text-[35px] text-gray-700 cursor-pointer"
                onClick={() => setModalAlways(!modalAlways)}
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
                          <span className="mb-2">
                            {data[variable][dataIndexEnterprise].description01}
                          </span>
                          <a
                            href="https://www.target.com/c/target-clean/-/N-p4n12"
                            target="_blank"
                            className="text-blue-800 underline"
                          >
                            {data[variable][dataIndexEnterprise].description02}
                          </a>
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

export default Enterprise2025