import React, { useState } from 'react'

const ShowMyName = () => {

    const [myname, setName] = useState("");

    const handelaung = ()=>{
        setName(myname +'aung');
    }

    const handelkyaw = ()=>{
        setName(myname + 'kyaw');
    }

    const handelzaww = ()=>{
        setName(myname + 'zaww');
    }

    const handelclear = ()=>{
        setName(" ");
    }

  return (
    <div className='p-4'>
        <h1 className='text-4xl font-bold mb-3'>My Name is "{myname}" </h1>
        <button type='button' className='bg-black text-white border px-4 py-2' onClick={handelaung}>Aung</button>
        <button type='button' className='bg-black text-white border px-4 py-2' onClick={handelkyaw}>Kyaw</button>
        <button type='button' className='bg-black text-white border px-4 py-2' onClick={handelzaww}>Zaww</button>
        <button type='button' className=' border border-black px-4 py-2' onClick={handelclear}>Clear</button>

    </div>
  )
}

export default ShowMyName
