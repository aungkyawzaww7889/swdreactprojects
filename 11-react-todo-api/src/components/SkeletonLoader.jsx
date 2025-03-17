import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="loader">
            <div className='animate-pulse flex justify-between items-center border-2 border-slate-300 p-2 rounded-lg mb-3 last:mb-0'>
                <div className="flex gap-3">
                    <div className="bg-slate-300 h-3 w-3"></div>
                    <div className="bg-slate-300 h-3 w-20 rounded-sm "></div>
                </div>
                <div className="bg-slate-300 h-8 w-16 rounded-md"></div>
            </div>

            <div className='animate-pulse flex justify-between items-center border-2 border-slate-300 p-2 rounded-lg mb-3 last:mb-0'>
                <div className="flex gap-3">
                    <div className="bg-slate-300 h-3 w-3"></div>
                    <div className="bg-slate-300 h-3 w-20 rounded-sm "></div>
                </div>
                <div className="bg-slate-300 h-8 w-16 rounded-md"></div>
            </div>

            <div className='animate-pulse flex justify-between items-center border-2 border-slate-300 p-2 rounded-lg mb-3 last:mb-0'>
                <div className="flex gap-3">
                    <div className="bg-slate-300 h-3 w-3"></div>
                    <div className="bg-slate-300 h-3 w-20 rounded-sm "></div>
                </div>
                <div className="bg-slate-300 h-8 w-16 rounded-md"></div>
            </div>
     </div>
  )
}

export default SkeletonLoader
