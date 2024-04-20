import React from "react";
import { IoBagHandle, IoCartSharp } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { HiOutlineAnnotation } from "react-icons/hi";


const DashboardGrid = ({ showCultural, setShow, setShowCultural }) => {
  return (
    <div className="flex gap-1 mt-[-5px] ">
      
      <div
        onClick={() => setShowCultural(!showCultural)}
        className="bg-white hover:bg-yellow-100 cursor-pointer rounded p-4 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#ffad00] rounded-full h-12 w-12 flex items-center justify-center">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              Culture Context
            </strong>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShow(true)}
        className="bg-white hover:bg-sky-100 cursor-pointer rounded p-4 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#28354e] rounded-full h-12 w-12 flex items-center justify-center">
          <IoBarChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          {/* <span className="text-sm text-gray-500 font-light">Total Sales</span> */}
          <div className="flex items-center ">
            <strong className="text-xl text-gray-700 font-semibold">
              Enterprise Priorities
            </strong>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShow(false)}
        className="bg-white hover:bg-green-200 cursor-pointer rounded p-4 flex-1 border border-gray-200 flex items-center"
      >
        <div className="bg-[#239058] rounded-full h-12 w-12 flex items-center justify-center">
          <HiOutlineAnnotation  className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          {/* <span className="text-sm text-gray-500 font-light">Total Sales</span> */}
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              Owned Brand Priorities
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;


