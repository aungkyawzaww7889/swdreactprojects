import React from 'react'
import Task from '../components/Task.jsx';

const TaskList = ({tasks,removeTask,doneTask}) => {

  // console.log(tasks.filter((task)=>task.isDone).length);
  return (

    <div>
        <h3 className='font-bold font-serif text-xl my-3 mt-4'>Task List (Total {tasks.length}), Done {tasks.filter((task)=>task.isDone).length}</h3>
        {tasks.map((task,idx)=>(
            <Task key={idx} job={task} removeTask={removeTask} doneTask={doneTask}/>
        ))}
    </div>
    
  )
}

export default TaskList
