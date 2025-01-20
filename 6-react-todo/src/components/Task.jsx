import React from 'react'

const Task = ({job,removeTask}) => {

    const removeTaskBtn = ()=>{
        if(confirm("Are you sure to delete")){
            removeTask(job);
        }
    }

  return (
    <div className='flex justify-between items-center border-2 border-slate-300 p-2 rounded-lg mb-3 last:mb-0'>
      <p>{job}</p>
      <button onClick={removeTaskBtn} className='bg-red-100 px-3 py-2 text-sm text-red-400 rounded-lg hover:bg-red-200 '>Delete</button>
    </div>
  )
}

export default Task
