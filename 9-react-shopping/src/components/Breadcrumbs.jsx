import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({currentpage}) => {
  return (
    <div className='mb-2'>
     <Link className='text-gray-500 hover:text-gray-900' to={"/"}>Home</Link>
     <span> / </span>
     <span className=''>{currentpage}</span>
    </div>
  )
}

export default Breadcrumbs
