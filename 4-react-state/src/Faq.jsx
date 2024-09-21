import React, { useState } from 'react'
import useAppStore from './store/useAppStore';

const Faq = ({faqdatas:{question,answer}}) => {


  // const [namechange, setnamechange] = useState(false);
  const {namechange,setnamechange} = useAppStore();

  const changetext = ()=>{
    setnamechange(!namechange);
  }

  return (
    <div className=' border border-black p-3 active:scale-90 duration-1000 cursor-pointer hover:bg-slate-300'>
     <div className='flex justify-between' onClick={changetext}>
        <h1 className='textl font-bold select-none'>{question}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`duration-1000 size-6 ${namechange === false ? "" : "rotate-180"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

     </div>

     <p className={`indent-7 text-justify select-none ${namechange === false ? "hidden" : " "}`}>{answer}</p>

    </div>
    
  )
}

export default Faq
