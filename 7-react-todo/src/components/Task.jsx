import React from 'react'

const Task = ({taskss,removeTask}) => {

    const removeTaskbtn = ()=>{
        if(confirm("Are you sure to delete?")){
            removeTask(taskss)
        }
    }

  return (
    <div className='border rounded-lg p-3 mb-3 last:mb-0 flex justify-between items-center'>
        <p>{taskss}</p>
        <button onClick={removeTaskbtn} type='button' className='text-sm text-red-400 bg-red-200 border border-red-100 p-2 rounded'>Delete</button>
    </div>
  );
};

export default Task
