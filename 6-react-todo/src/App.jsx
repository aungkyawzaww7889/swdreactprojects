// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'

const App = () => {

  const [tasks,settask] = useState([
    
      "task1",
      "task2",
      "task3",    
      "task4",
      "task5"

  ]);

  const addtasks = (newtask)=>{
    settask([...tasks,newtask]);
  }

  const removeTask = (removeitem)=>{
   settask(tasks.filter((task)=>task !== removeitem));
  }

  return (
    <div className='p-10'>
      <Heading/>
      <CreateTask addtasks={addtasks}/>
      <TaskList removeTask={removeTask} tasks={tasks}/> 
    </div>
  )
}

export default App
