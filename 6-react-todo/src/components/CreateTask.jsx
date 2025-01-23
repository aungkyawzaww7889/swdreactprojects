import React, { useState } from 'react'

const CreateTask = ({addTask}) => {

    const [job,setJob] = useState("");

    const handleOnChange = (event)=>{
        // console.log(event.target.value);
        setJob(event.target.value);
    }

    const handleAddTaskBtn = ()=>{
        // console.log(job);
        const newTask = {
          id: Date.now(),
          task: job,
          isDone:false,
        }
        addTask(newTask);
        setJob("");
    }

  return (
    <div className='flex'>
      <input type="text" className='flex-grow border-2 border-slate-300 focus:outline-none px-3 py-2 rounded-l-md' value={job} onChange={handleOnChange} placeholder='Enter new task'/>
      <button type='button' className='bg-slate-400 border-2 border-slate-300 p-3 rounded-r-md hover:bg-slate-500 text-white' onClick={handleAddTaskBtn}>Add</button>
    </div>
  )
}

export default CreateTask
