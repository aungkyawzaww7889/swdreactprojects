// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Mainlayout = () => {
  return (
   <div>
        <Header/>   
        <Outlet/>
        <Toaster/>
        <Footer/> 
   </div>    
  )
}

export default Mainlayout
