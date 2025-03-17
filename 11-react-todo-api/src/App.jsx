import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask"
import Heading from "./components/Heading"
import TaskList from "./components/TaskList"
import SkeletonLoader from "./components/SkeletonLoader";

function App() {
  const [tasks,setTasks] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const addTask = async (newTask)=>{

    setSending(true);
    const res = await fetch("http://localhost:5000/tasks",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    // headers မှာ s ကျန်ခဲ့လို့တိုင်ပတ်
    const data = await res.json();
    setTasks([...tasks,data]);
    setSending(false);

  }

  const removeTask = async (id)=>{
    setDeleteLoading(true);
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "DELETE"
    });

    const data = await res.json();
    // console.log(data);

    setTasks(tasks.filter((task) => task.id != id))
    setDeleteLoading(false);

  }

  const doneTask = async (id, currentState)=>{

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({isDone: !currentState}),
    });

    const data = await res.json();
    console.log(data);


    // setTasks(tasks.map((task)=> task.id === id ? {...task, isDone: !task.isDone} : task));
    setTasks(tasks.map((task)=> task.id === id ? data : task));
  }


  const fetchTask = async () =>{
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
    setTaskLoading(false);
  }

  useEffect(()=>{
    // console.log("hello");
    fetchTask();

  },[])

  return (
    <div className="p-10">
      <Heading/>
      <CreateTask sending={sending} addTask={addTask} />
      <TaskList deleteLoading={deleteLoading} tasks={tasks} removeTask={removeTask} doneTask={doneTask}/>
      {/* { taskLoading && "Loading..."} */}

      { taskLoading && <SkeletonLoader/>}
    </div>
  )
}

export default App
