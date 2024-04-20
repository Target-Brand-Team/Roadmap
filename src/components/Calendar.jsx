import React from 'react'

const Calendar = () => {
  return (
    <div className='flex'>
        <div className="bg-gradient-to-t from-gray-400 rounded p-4 gap-2 border border-gray-200 flex justify-center items-center">
           
        </div>
        <div className="bg-gradient-to-t from-gray-400 rounded p-3 gap-2 flex-1 border border-gray-200 flex justify-center items-center">
            <span className=' w-32 font-medium text-center'>Feb</span>
            <span className=' w-32 font-medium text-center'>Mar</span>
            <span className=' w-32 font-medium text-center'>Apr</span>
        </div>
        <div className="bg-gradient-to-t from-gray-400 rounded p-2 gap-2 flex-1 border border-gray-200 flex justify-center items-center">
            <span className=' w-32 font-medium text-center'>May</span>
            <span className=' w-32 font-medium text-center'>Jun</span>
            <span className=' w-32 font-medium text-center'>Jul</span>
        </div>
        <div className="bg-gradient-to-t from-gray-400 rounded p-2 gap-2 flex-1 border border-gray-200 flex justify-center items-center">
            <span className=' w-32 font-medium text-center'>Aug</span>
            <span className=' w-32 font-medium text-center'>Sep</span>
            <span className=' w-32 font-medium text-center'>Oct</span>
        </div>
        <div className="bg-gradient-to-t from-gray-400 rounded p-2 gap-2 flex-1 border border-gray-200 flex justify-center items-center">
            <span className=' w-32 font-medium text-center'>Nov</span>
            <span className=' w-32 font-medium text-center'>Dec</span>
            <span className=' w-32 font-medium text-center'>Jan</span>
        </div>
       
    </div>
  )
}

export default Calendar