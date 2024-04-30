import React from "react";
import { IoBagHandle, IoCartSharp } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { HiOutlineAnnotation } from "react-icons/hi";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { HiChevronDoubleUp } from "react-icons/hi2";

const DashboardGrid = ({
  showCultural,
  setShow,
  show,
  setShowCultural,
  setShowOwned,
  showOwned,
}) => {
  return (
    <div className="flex gap-1 mt-[-5px] ">
      <div
        onClick={() => setShowCultural(!showCultural)}
        className="bg-white hover:bg-yellow-100 cursor-pointer rounded p-1 py-3 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#ffad00] rounded-full h-12 w-12 flex items-center justify-center">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-2">
          <div className="flex items-center">
            <strong className="text-lg text-[#ffad00] font-semibold">
              Culture Context
            </strong>
          </div>
          <span className="text-[12px]  text-gray-700">
            Key Cultural - Commercial Moments
          </span>
        </div>

        {showCultural ? (
          <div className="h-full w-6 pt-1 flex text-lg justify-center items-start  ">
            <HiChevronDoubleUp className="ml-" />
          </div>
        ) : (
          <div className="h-full w-6 pt-1 flex text-lg justify-center items-start">
            <HiChevronDoubleDown className="ml-" />
          </div>
        )}
      </div>

      <div
        onClick={() => setShow(!show)}
        className="bg-white hover:bg-sky-100 cursor-pointer rounded p-1 py-3 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#28354e] rounded-full h-12 w-12 flex items-center justify-center">
          <IoBarChart className="text-2xl text-white" />
        </div>
        <div className="pl-2">
          {/* <span className="text-sm text-gray-500 font-light">Total Sales</span> */}
          <div className="flex items-center ">
            <strong className="text-lg text-[#28354e] font-semibold">
              Enterprise Priorities
            </strong>
          </div>
          <span className="text-[12px]  text-gray-700">
            TGT Forward & Inclusive Initiatives
          </span>
        </div>

        {show ? (
          <div className="h-full w-8 pt-1 pl-3 flex text-lg justify-center items-start ">
            <HiChevronDoubleUp className="ml-" />
          </div>
        ) : (
          <div className="h-full w-8 pt-1 pl-3 flex text-lg justify-center items-start">
            <HiChevronDoubleDown className="ml-" />
          </div>
        )}
      </div>

      <div
        onClick={() => setShowOwned(!showOwned)}
        className="bg-white hover:bg-green-200 cursor-pointer rounded p-1 py-3 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#239058] rounded-full h-12 w-12 flex items-center justify-center">
          <HiOutlineAnnotation className="text-2xl text-white" />
        </div>
        <div className="pl-2">
          {/* <span className="text-sm text-gray-500 font-light">Total Sales</span> */}
          <div className="flex items-center">
            <strong className="text-lg text-[#239058] font-semibold">
              Owned Brand Priorities
            </strong>
          </div>
          <span className="text-[12px]  text-gray-700">Pyramid(s)</span>
        </div>

        {showOwned ? (
          <div className="h-full w-8 pt-1 pl-3 flex text-lg justify-center items-start ">
            <HiChevronDoubleUp className="ml-" />
          </div>
        ) : (
          <div className="h-full w-8 pt-1 pl-3 flex text-lg justify-center items-start">
            <HiChevronDoubleDown className="ml-" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardGrid;
