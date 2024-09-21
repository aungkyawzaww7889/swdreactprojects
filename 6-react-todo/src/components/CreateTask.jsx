import React, { useState } from 'react'

const CreateTask = ({addtasks}) => {

  const [job,setjob]  = useState("");

  const onChangeHandel = (e)=>{
    setjob(e.target.value);
    
  }

  const addtaskbtn = ()=>{
    addtasks(job);
    setjob("");
  }

  return (
    <div className='my-5'>
        <form action="" method="">
           <div className='flex'>
              <input type="text" className='w-full border outline-none p-3 rounded' onChange={onChangeHandel} value={job} placeholder='Enter Task' autoFocus/>
              <button type='button' className='bg-gray-200 border p-3 rounded' onClick={addtaskbtn}>Add</button>
           </div>
        </form>
    </div>
  )
}

export default CreateTask
