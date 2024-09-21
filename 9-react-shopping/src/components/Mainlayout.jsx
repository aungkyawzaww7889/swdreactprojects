// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
   <div>
        <Header/>   
        <Outlet/>
        <Footer/> 
   </div>    
  )
}

export default Mainlayout
