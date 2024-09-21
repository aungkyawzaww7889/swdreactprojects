import React, { useState } from 'react'
import useCounterStore from './../Store/useCounterStore'

const Counter = () => {

    // const [count,setCount] = useState(0);
   const {count,resetCount,incrementCount,decrementCount} = useCounterStore();


    const resetHandaler = ()=>{
        // setCount(0);
        resetCount();
    }


    const incrementHandeler = ()=>{
        // setCount(count + 1);
        incrementCount();
    }


    const decrementHandeler = ()=>{
        // setCount(count - 1);
        decrementCount();
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-9xl font-bold mb-4">{count}</h1>
        <div className="text-4xl mb-4"></div>
        <div className="space-x-4">

          <button onClick={decrementHandeler} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Decrement</button>
          <button onClick={resetHandaler} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Reset</button>
          <button onClick={incrementHandeler} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Increment</button>

        </div>
      </div>
    </div>
  )
}

export default Counter;
