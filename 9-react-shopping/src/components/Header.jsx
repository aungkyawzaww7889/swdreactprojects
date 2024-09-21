// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
      <Container>
         <header>
          <div className='p-5 flex justify-between relative'>
              <Link to={"/"}><h1 className='text-xl font-bold'>OnlineShop</h1></Link>
              <Link to="/mycart" className='border border-black px-5 py-2 cursor-pointer'>Mycart<span className='inline-block bg-rose-600 text-xs text-white px-3 py-1 absolute top-3 right-3'>1</span></Link>
          </div>
        </header>
      </Container>


  )
}

export default Header
