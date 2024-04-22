import React from 'react'
import { CULTURAL_CONTEXT_LINKS } from '../../Database_2024/CulruralData'


const Cultural = () => {
  return (
    <div className='flex h-48'>
        <div className="bg-targetYellow vertical rounded-tr-md rounded-br-md p-1 gap-2 text-center font-semibold text-gray-700 border border-gray-200 flex justify-center items-center w-9">
           Key Cultural
        </div>

                    {/* ====   FIRST QUATER Q1  ==== */}
        <main className="bg-white shadow rounded p-2 gap-3 flex-1 border border-gray-200 flex justify-center items-center ">
          
          {/* ====   FEBRUARY EVENTS ==== */}
          <div>
          {CULTURAL_CONTEXT_LINKS?.FEBRUARY?.map((item)=> (
            <div key={item.key} className=' text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md'>  
               <span>{item?.label}</span>
            </div>
          ))}
          </div>

          {/* ====   MARCH EVENTS ==== */}
          <div>
          {CULTURAL_CONTEXT_LINKS?.MARCH?.map((item)=> (
            <div key={item.key} className=' text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md'>  
               <span>{item?.label}</span>
            </div>
          ))}
          </div>

          {/* ====   APRIL EVENTS ==== */}
          <div>
          {CULTURAL_CONTEXT_LINKS?.APRIL?.map((item)=> (
            <div key={item.key} className=' text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md'>  
               <span>{item?.label}</span>
            </div>
          ))}
          </div>  
        </main>

                    {/* ====   SECOND QUATER Q1  ==== */}
        <main className="bg-white shadow rounded p-2 gap-3 flex-1 border border-gray-200 flex justify-center items-center ">
          
          {/* ====   MAY EVENTS ==== */}
          <div>
          {CULTURAL_CONTEXT_LINKS?.MAY?.map((item)=> (
            <div key={item.key} className=' text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md'>  
               <span>{item?.label}</span>
            </div>
          ))}
          </div>

          {/* ====   JUNE EVENTS ==== */}
          <div>
          {CULTURAL_CONTEXT_LINKS?.JUNE?.map((item)=> (
            <div key={item.key} className=' text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md'>  
               <span>{item?.label}</span>
            </div>
          ))}
          </div>

          {/* ====   JULY EVENTS ==== */}
          <div>
          {CULTURAL_CONTEXT_LINKS?.JULY?.map((item)=> (
            <div key={item.key} className=' text-gray-700 w-32 font-medium text-center p-1 mb-1 shadow-md rounded-md'>  
               <span>{item?.label}</span>
            </div>
          ))}
          </div>  
        </main>


       
       
        <div className="bg-white shadow rounded p-2 gap-2 flex-1 border border-gray-200 flex justify-center items-center">
            <span className=' w-32 font-medium text-center'>Aug</span>
            <span className=' w-32 font-medium text-center'>Sep</span>
            <span className=' w-32 font-medium text-center'>Oct</span>
        </div>
        <div className="bg-white shadow rounded p-2 gap-2 flex-1 border border-gray-200 flex justify-center items-center">
            <span className=' w-32 font-medium text-center'>Nov</span>
            <span className=' w-32 font-medium text-center'>Dec</span>
            <span className=' w-32 font-medium text-center'>Jan</span>
        </div>
       
    </div>
  )
}

export default Cultural