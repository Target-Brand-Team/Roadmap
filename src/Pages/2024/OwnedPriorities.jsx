import React, { useState } from "react";
import { OWNED_BRAND_DATA } from "../../Database_2024/OwnedBrandData";
import OwnedBrandRollover from "../../components/Rollover/OwnedBrandRollover";
import { IoClose } from "react-icons/io5";
import dealworthy from '../../assets/Dealworthy.png'

const OwnedPriorities = () => {
  const [ownedData, setownedData] = useState(OWNED_BRAND_DATA);
  const [dataIndexOwnedBrand, setDataIndexOwnedBrand] = useState(null);
  const [ownedVariable, setOwnedVariable] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-white h-[1200px] w-full flex mb-10">
      <div className=" bg-teal-400 w-8 flex flex-col gap-1">
        <span className="flex-1 vertical text-[13px] text-white bg-targetGreen text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
          Portfolio Priorities
        </span>
        <span className="flex-1 vertical text-[13px] text-white bg-targetGreen text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
          Accessories & Apparel
        </span>
        <span className="flex-1 vertical text-[13px] text-white bg-targetGreen text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
          Essentials & Beauty
        </span>
        <span className="flex-1 vertical text-[13px] text-white bg-targetGreen text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
          Food & Beverage
        </span>
        <span className="flex-1 vertical text-[13px] text-white bg-targetGreen text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
          Hardlines
        </span>
        <span className="flex-1 vertical text-[13px] text-white bg-targetGreen text-center font-semibold p-1 flex justify-center items-center rounded-tr-md rounded-br-md">
          Home
        </span>
      </div>

      <section className="w-full flex flex-col ">
        {/* ==== PORTFOLIO PRIORITIES */}
        <div className="shadow flex-1 flex flex-wrap relative">
          {/* {ownedData?.map((item) => (
             <div key={item.id} className="absolute">
             <OwnedBrandRollover 
             width={item?.width}
             height="25px"
             left={item.left}
             top={item?.top}
             text={item.label}
             backgroundColor={item.color}
             image={item.image}
             />             
              </div>
          ))} */}
        </div>

        {/* ==== ACCESSORIES & APPAREL */}
        <div className="shadow flex-1 flex flex-wrap relative">
          {ownedData?.ACCESSORIES?.map((item, index) => (
            <div key={item.id} className="absolute"
            onClick={() => {
              setDataIndexOwnedBrand(index);
              setModal(!modal);
              setOwnedVariable('ACCESSORIES')
            }}>
              <OwnedBrandRollover
                width={item?.width}
                height="25px"
                left={item.left}
                top={item?.top}
                text={item.label}
                backgroundColor={item.color}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* ==== ESSENTIALS & BEAUTY */}
        <div className="shadow flex-1 flex flex-wrap relative">
          {ownedData?.ESSENTIALS?.map((item, index) => (
            <div
              key={item.id}
              className="absolute"
              onClick={() => {
                setDataIndexOwnedBrand(index);
                setModal(!modal);
                setOwnedVariable('ESSENTIALS')
              }}
            >
              <OwnedBrandRollover
                width={item?.width}
                height="25px"
                left={item.left}
                top={item?.top}
                text={item.label}
                backgroundColor={item.color}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* ==== FOOD & BEVERAGE */}
        <div className="shadow flex-1 flex flex-wrap relative">
          {ownedData?.FOOD?.map((item, index) => (
            <div
              key={item.id}
              className="absolute"
              onClick={() => {
                setDataIndexOwnedBrand(index);
                setModal(!modal);
                setOwnedVariable('FOOD')
              }}
            >
              <OwnedBrandRollover
                width={item?.width}
                height="25px"
                left={item.left}
                top={item?.top}
                text={item.label}
                backgroundColor={item.color}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* ==== HARDLINES */}
        <div className="shadow flex-1 flex flex-wrap relative">
          {ownedData?.HARDLINES?.map((item, index) => (
            <div
              key={item.id}
              className="absolute"
              onClick={() => {
                setDataIndexOwnedBrand(index);
                setModal(!modal);
                setOwnedVariable('HARDLINES')
              }}
            >
              <OwnedBrandRollover
                width={item?.width}
                height="25px"
                left={item.left}
                top={item?.top}
                text={item.label}
                backgroundColor={item.color}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* ==== HOME */}
        <div className="shadow flex-1 flex flex-wrap relative">
          {ownedData?.HOME?.map((item, index) => (
            <div
              key={item.id}
              className="absolute"
              onClick={() => {
                setDataIndexOwnedBrand(index);
                setModal(!modal);
                setOwnedVariable('HOME')
              }}
            >
              <OwnedBrandRollover
                width={item?.width}
                height="25px"
                left={item.left}
                top={item?.top}
                text={item.label}
                backgroundColor={item.color}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </section>


                        {/* === MODAL === */}
      {modal ? (
        //  === FADE ===
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[1000px] h-[700px] p-1 rounded-lg shadow-xl">
            <div className="flex justify-end">
              <IoClose
                className="text-[35px] text-gray-700 cursor-pointer"
                onClick={() => setModal(!modal)}
              />
            </div>
            {
              <>
                <div className="px-8">
                  <div className="px-4 sm:px-0 flex items-center gap-5">
                    
                      <div>
                        <img src={ownedData[ownedVariable][dataIndexOwnedBrand]?.image} alt="" className="w-24"/>
                      </div>
                      <h3 className="text-3xl font-semibold leading-7 text-gray-500">
                      {ownedData[ownedVariable][dataIndexOwnedBrand]?.label}
                    </h3>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <span className=" font-semibold leading-6 text-gray-900">
                          Pyramids
                        </span>
                        <dd className="mt-1 leading-6 text-gray-700 ">
                          <div className="flex gap-2">
                              <span className="font-semibold">Primary: </span>
                              {ownedData[ownedVariable][dataIndexOwnedBrand]?.pyramid?.primary}
                              <span className="font-semibold ml-8">Secondary:</span>
                              {ownedData[ownedVariable][dataIndexOwnedBrand]?.pyramid?.secondary}
                          </div>
                         
                        </dd>
                      </div>
                      <div className="px-4 py-6 flex gap-[280px] sm:px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          Goal
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-500 ">
                        {ownedData[ownedVariable][dataIndexOwnedBrand]?.goal}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          What's happening with the Brand?
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-500 ">
                          Launch
                        </dd>
                      </div>
                      <div className="px-4 py-6 flex gap-[270px] sm:px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          When
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-500 ">
                        {ownedData[ownedVariable][dataIndexOwnedBrand]?.when}
                        </dd>
                      </div>
                      <div className="px-4 py-6 flex gap-[230px] sm:px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          Description
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-500  ">
                        {ownedData[ownedVariable][dataIndexOwnedBrand]?.description}
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
    </div>
  );
};

export default OwnedPriorities;
