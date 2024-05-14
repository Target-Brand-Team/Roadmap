import React from "react";
import { IoBagHandle, IoCartSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { HiOutlineAnnotation } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";

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
        className="relative bg-white hover:bg-yellow-100 cursor-pointer rounded p-1 py-3 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#ffad00] rounded-full h-12 w-12 flex items-center justify-center">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-2 w-[250px]">
          <div className="flex items-center">
            <strong className="text-lg text-[#ffad00] font-semibold">
              Cultural Context
            </strong>
          </div>
          <span className="text-[12px]  text-gray-700">
            Key Cultural & Commercial Moments
          </span>
        </div>

        {showCultural ? (
          <div className="h-full w-6 text-2xl flex justify-center items-start group ">
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-600 rounded shadow-xl p-1 w-16 h-8 absolute right-1 top-[-20px] bg-white ">
              Close
            </span>
            <div>
              <HiChevronDown className="absolute right-2 text-[#ffad00] z-10" />
            </div>
          </div>
        ) : (
          <div className="h-full w-6 text-2xl flex justify-center items-start group">
             <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-600 rounded shadow-xl p-1 w-16 h-8 absolute right-1 top-[-20px] bg-white ">
              Open
            </span>
            <div>
              <HiChevronUp className="absolute right-2 text-[#ffad00] z-10" />
            </div>
          </div>
        )}
      </div>

      <div
        onClick={() => setShow(!show)}
        className="relative bg-white hover:bg-sky-100 cursor-pointer rounded p-1 py-3 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#28354e] rounded-full h-12 w-12 flex items-center justify-center">
          <IoBarChart className="text-2xl text-white" />
        </div>
        <div className="p-2 w-[267px]">
          {/* <span className="text-sm text-gray-500 font-light">Total Sales</span> */}
          <div className="flex items-center ">
            <strong className="text-lg text-[#28354e] font-semibold">
              Enterprise Priorities
            </strong>
          </div>
          <span className="text-[12px]  text-gray-700">
            TGT Forward, LTOs & Strategic Partnerships
          </span>
        </div>

        {show ? (
          <div className="h-full w-9 pl-3 text-2xl flex justify-center items-start group">
             <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-600 rounded shadow-xl p-1 w-16 h-8 absolute right-1 top-[-20px] bg-white ">
              Close
            </span>
            <div>
              <HiChevronDown className="absolute right-2 text-[#28354e] z-10" />
            </div>
          </div>
        ) : (
          <div className="h-full w-9 pl-3 text-2xl flex justify-center items-start group">
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-600 rounded shadow-xl p-1 w-16 h-8 absolute right-1 top-[-20px] bg-white ">
              Open
            </span>
            <div>
              <HiChevronUp className="absolute right-2 text-[#28354e] z-10" />
            </div>
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
        <div className="relative pl-2 w-[250px]">
          {/* <span className="text-sm text-gray-500 font-light">Total Sales</span> */}
          <div className="flex items-center">
            <strong className="text-lg text-[#239058] font-semibold">
              Owned Brand Priorities
            </strong>
          </div>
          <span className="text-[12px]  text-gray-700">
            Initiatives by Pyramid
          </span>
        </div>

        {showOwned ? (
          <div className="h-full w-9 pl-3 text-2xl flex justify-center items-start group">
             <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-600 rounded shadow-xl p-1 w-16 h-8 absolute top-6 right-10 bg-white ">
              Open
            </span>
            <div>
              <HiChevronUp className="absolute right-7 text-[#239058] z-10" />
            </div>
          </div>
        ) : (
          <div className="h-full w-9 pl-3 mt-[-15px] text-2xl flex justify-center items-start group">
           <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 text-[14px] text-center text-gray-600 rounded shadow-xl p-1 w-16 h-8 absolute top-6 right-10 bg-white ">
              Close
            </span>
            <div>
              <HiChevronDown className="absolute top-14 right-7 text-[#239058] z-10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardGrid;
