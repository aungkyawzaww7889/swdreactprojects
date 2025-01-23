import React from 'react'

const Task = ({job:{id,task,isDone},removeTask,doneTask}) => {


    const removeTaskBtn = ()=>{
        if(confirm("Are you sure to delete")){
            removeTask(id);
        }
    }

    const handleOnChange = () =>{
      doneTask(id);
    }

  return (
    <div className='flex justify-between items-center border-2 border-slate-300 p-2 rounded-lg mb-3 last:mb-0'>
      <div className='flex gap-3'>
        <input type="checkbox" onChange={handleOnChange} checked={isDone} className='text-sm' />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button onClick={removeTaskBtn} className='bg-red-100 px-3 py-2 text-sm text-red-400 rounded-lg hover:bg-red-200 '>Delete</button>
    </div>
  )
}

export default Task
