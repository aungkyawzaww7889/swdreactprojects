// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from './Container';

const Footer = () => {

    const getdate = new Date();
    
  return (
   <Container>
      
        <footer className='bg-slate-900 text-white text-center py-2 mt-auto'>
        &copy;{getdate.getUTCFullYear()} <a href="#" className='text-slate-200 underline'>MMS IT</a> All rights reserved.
        </footer>
      
   </Container>
  )
}

export default Footer
