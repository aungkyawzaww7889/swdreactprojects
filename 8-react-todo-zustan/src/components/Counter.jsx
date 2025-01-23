import React, { useState } from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = () => {
//   const [count, setCount] = useState(0);

  // console.log(useCounterStore());
    const {count, reset, increaseCount, decreaseCount} = useCounterStore();


  const onIncreaseHandler = () =>{
    // setCount(count + 1);
    increaseCount(3);
  }

  const onDecreaseHandler = () =>{
    // setCount(count - 1);
    decreaseCount();
  }

  const resetHandler = () =>{
    // setCount(0);
    reset();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Counter App</h1>
        <p className="text-5xl font-semibold text-blue-500 my-4">{count}</p>
        <div className="flex space-x-4">
          <button
            onClick={onIncreaseHandler}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Increment
          </button>

          <button
            onClick={onDecreaseHandler}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Decrement
          </button>

          <button
            onClick={resetHandler}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
