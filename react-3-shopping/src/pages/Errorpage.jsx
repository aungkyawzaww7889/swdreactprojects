import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-96 flex flex-col text-center space-y-3'>
            <span className='text-3xl font-bold'>404 NOT FOUND</span>
            <span className='text-gray-500'>Sumenda spanossimus rem neque blanditiis! Sapiente temporibus dolores cupiditate ipsa quia, ea tempore quibusdam.</span>
            <Link to={'/'} className='border border-black hover:bg-slate-900 hover:text-white cursor-pointer px-4 py-2 mt-5'>Go Home</Link>
        </div>
    </div>
  )
}

export default Errorpage
