import React from 'react'
import Task from '../components/Task.jsx';

const TaskList = ({tasks,removeTask}) => {

  return (

    <div>
        <h3 className='font-bold font-serif text-xl my-3 mt-4'>Task List (Total {tasks.length}), Done {0}</h3>
        {tasks.map((task,idx)=>(
            <Task key={idx} job={task} removeTask={removeTask}/>
        ))}
    </div>
    
  )
}

export default TaskList
