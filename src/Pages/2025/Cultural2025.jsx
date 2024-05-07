import React from 'react'
import { CULTURAL_CONTEXT_LINKS_2025 } from '../../Database_2024/2025/CulturalData2025';


const Cultural2025 = () => {
  return (
    <div className=" flex h-48">
      <div className="bg-targetYellow vertical rounded-tr-md rounded-br-md p-1 gap-2 text-center font-semibold text-gray-700 border border-gray-200 flex justify-center items-center w-9">
        Key Cultural
      </div>

      {/* ====   FIRST QUATER Q1  ==== */}
      <main className="max-[1280px]:w-[252px] bg-white shadow rounded pt-1  border border-gray-200 flex gap-1 ">
        {/* ====   FEBRUARY EVENTS ==== */}
        <div>
          {CULTURAL_CONTEXT_LINKS_2025?.FEBRUARY?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.MARCH?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.APRIL?.map((item) => (
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
      <main className="max-[1280px]:w-[220px] bg-white shadow rounded pt-1 gap-1 flex-1 border border-gray-200 flex  ">
        {/* ====   MAY EVENTS ==== */}
        <div>
          {CULTURAL_CONTEXT_LINKS_2025?.MAY?.map((item) => (
            <div
              key={item.key}
              className="max-[1280px]:w-[82px] max-[1280px]:text-[12px] text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md"
            >
              <span>{item?.label}</span>
            </div>
          ))}
        </div>

        {/* ====   JUNE EVENTS ==== */}
        <div>
          {CULTURAL_CONTEXT_LINKS_2025?.JUNE?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.JULY?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.AUGUST?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.SEPTEMBER?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.OCTOBER?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.NOVEMBER?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.DECEMBER?.map((item) => (
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
          {CULTURAL_CONTEXT_LINKS_2025?.JANUARY?.map((item) => (
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
  );
}

export default Cultural2025