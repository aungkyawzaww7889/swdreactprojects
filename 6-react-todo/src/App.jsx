import { useState } from "react";
import CreateTask from "./components/CreateTask"
import Heading from "./components/Heading"
import TaskList from "./components/TaskList"

function App() {
  const [tasks,setTasks] = useState([
    { id: 1, task: "Learn NestJS basics", isDone: false },
    { id: 2, task: "Understand modules and controllers", isDone: true },
    { id: 3, task: "Work with services and providers", isDone: false },
    { id: 4, task: "Implement authentication and authorization", isDone: true }
  ]);

  const addTask = (newTask)=>{
    setTasks([...tasks,newTask]);
  }

  const removeTask = (id)=>{
    setTasks(tasks.filter((task) => task.id != id))
  }

  const doneTask = (id)=>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, isDone: !task.isDone} : task));
  }

  return (
    <div className="p-10">
      <Heading/>
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask}/>
    </div>
  )
}

export default App
