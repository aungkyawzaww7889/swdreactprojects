import React from 'react'
import Task from './Task'

const TaskList = ({tasks,removeTask}) => {

  // console.log(tasks);
  return (
    <div>
        <h1 className='text-xl font-serif font-bold mb-2'>TaskList {tasks.length}</h1>

        {tasks.map((task,idx)=>( 
            <Task removeTask={removeTask} key={idx} taskss={task}/>
        ))}


    </div>
  )
}

export default TaskList
