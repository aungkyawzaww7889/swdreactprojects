import React, { useState } from 'react'

const App = () => {

  // console.log(useState(0))
  const [count, setCount] = useState(1);

  const handelIncrement = ()=>{
    setCount(count+1)
  }

  const handelDecrement = ()=>{
    setCount(count-1)
  }

  return (
    <div className="p-10  ">

      <h1 className='text-9xl font-bold'>{count}</h1>
      <button type='button' className='bg-black text-white border px-4 py-2' onClick={handelDecrement}>Decrement</button>
      <button type='button' className='bg-black text-white border px-4 py-2' onClick={handelIncrement}>Increment</button>

    </div>
  )
}

export default App
