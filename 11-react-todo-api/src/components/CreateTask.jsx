import React, { useState } from 'react'
import { ring2 } from 'ldrs'

const CreateTask = ({addTask, sending}) => {

    const [job,setJob] = useState("");
    ring2.register();


    const handleOnChange = (event)=>{
        // console.log(event.target.value);
        setJob(event.target.value);
    }

    const handleAddTaskBtn = ()=>{
        // console.log(job);
        if(job.trim()){
          const newTask = {
            task: job,
            isDone:false,
          }
          addTask(newTask);
          setJob("");
        }else{
          alert("Please fill task");
        }
    }

  return (
    <div className='flex'>
      <input type="text" disabled={sending} className='disabled:bg-gray-200 flex-grow border-2 border-slate-300 focus:outline-none px-3 py-2 rounded-l-md' value={job} onChange={handleOnChange} placeholder='Enter new task'/>
      <button type='button' disabled={sending} className='disabled:opacity-50 bg-slate-400 border-2 border-slate-300 p-3 rounded-r-md hover:bg-slate-500 text-white' onClick={handleAddTaskBtn}>{sending ? <l-ring-2 size="20" stroke="5" stroke-length="0.25" bg-opacity="0.1" speed="0.8" color="black" ></l-ring-2> : "Add"}</button>
    </div>
  )
}

export default CreateTask


