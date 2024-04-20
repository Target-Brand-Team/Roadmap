import React,{useEffect, useRef} from 'react'

const Calendar = () => {
    const headerRef = useRef(null)
  
    const stickHeaderFunc = () => {
      window.addEventListener('scroll', ()=> {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
          headerRef.current.classList.add('sticky_header')
        }else{
          headerRef.current.classList.remove('sticky_header')
        }
      })
    }
  
    useEffect(()=> {
  stickHeaderFunc()
  return window.removeEventListener('scroll', stickHeaderFunc)
    }, [])



  return (
    <div className='flex' ref={headerRef}>
        <div className="bg-gradient-to-t from-gray-400 rounded p-4 gap-2 border border-gray-200 flex justify-center items-center">
           
        </div>
        <div className="bg-gradient-to-t from-gray-400 rounded p-2 py-5 gap-2 flex-1 border border-gray-200 flex justify-center items-center">
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