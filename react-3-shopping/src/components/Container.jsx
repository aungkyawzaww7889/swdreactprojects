import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full md:w-[1080px] xl:w-[1200px]  mx-auto'>{children}</div>
  )
}

export default Container
