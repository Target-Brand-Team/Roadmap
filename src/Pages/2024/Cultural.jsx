import React, { useState } from "react";
import { CULTURAL_CONTEXT_LINKS } from "../../Database_2024/2024/CulruralData";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi2";


const Cultural = () => {
  const [mainBarToggle, setMainBarToggle] = useState(true);

  return (
    <section>
      <div
        className="bg-targetYellow hover:bg-yellow-600 flex items-center text-white rounded text-center text-lg mb-1 py-2 cursor-pointer group"
        onClick={() => setMainBarToggle(!mainBarToggle)}
      >
        {/* Tootip */}
        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-yellow-500 text-white text-sm font-thin rounded shadow-xl absolute bottom- left-1 px-1 py-2 rotate  w-28 h-[239px]">
          The biggest cultural happenings and commercial events that have an
          impact on customer behavior and should inspire and guide our thinking
        </span>
        <h3 className="ml-[461px]">Cultural Context</h3>
        {mainBarToggle ? (
          <FaMinus className="ml-[433px] cursor-pointer text-[16px]" />
        ) : (
          <FaPlus className="ml-[433px] cursor-pointer text-[16px]" />
        )}
      </div>

      {mainBarToggle ? (
        <div className=" flex">
          <div
            className="bg-targetYellow  hover:bg-yellow-600 vertical rounded-tr-md rounded-br-md p-1 gap-2 text-center text-[13px] font-semibold text-white border border-gray-200 flex items-center justify-center w-9 cursor-pointer"
            onClick={() => setMainBarToggle(!mainBarToggle)}
          >
            <span className="pt-5">Cultutal Context</span> 
             <HiChevronDown className="mt-3 text-xl" />
          </div>

          {/* ====   FIRST QUATER Q1  ==== */}
          <main className="max-[1280px]:w-[252px] bg-white shadow rounded pt-1  border border-gray-200 flex gap-1 ">
            {/* ====   FEBRUARY EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.FEBRUARY?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 font-medium text-center px-1 py-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   MARCH EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.MARCH?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   APRIL EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.APRIL?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>
          </main>

          {/* ====   SECOND QUATER Q2  ==== */}
          <main className="max-[1280px]:w-[220px] bg-white shadow rounded pt-1 gap-1 flex-1 border border-gray-200 flex ">
            {/* ====   MAY EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.MAY?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[84px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   JUNE EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.JUNE?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[81px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   JULY EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.JULY?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>
          </main>

          {/* ====   THIRD QUATER Q3  ==== */}
          <main className="max-[1280px]:w-[220px] bg-white shadow rounded pt-1 gap-1 flex-1 border border-gray-200 flex">
            {/* ====   AUG EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.AUGUST?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   SEPT EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.SEPTEMBER?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   OCT EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.OCTOBER?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>
          </main>

          {/* ====   FOURTH QUATER Q4  ==== */}
          <main className="max-[1280px]:w-[220px] bg-white shadow rounded pt-1 gap-1 flex-1 border border-gray-200 flex">
            {/* ====   NOV EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.NOVEMBER?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   DEC EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.DECEMBER?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* ====   JAN EVENTS ==== */}
            <div>
              {CULTURAL_CONTEXT_LINKS?.JANUARY?.map((item) => (
                <div
                  key={item.key}
                  className="max-[1280px]:w-[80px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
                >
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>
          </main>
        </div>
      ) : null}
    </section>
  );
};

export default Cultural;
