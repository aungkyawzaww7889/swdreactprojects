import { useState } from "react";
import CreateTask from "./components/CreateTask"
import Heading from "./components/Heading"
import TaskList from "./components/TaskList"
import useSWR from "swr";
import { useSWRConfig } from 'swr';
import axios from "axios";

const myLocalApi = import.meta.env.VITE_BASE_URL;
const fetcher = (...args) => fetch(...args).then(res => res.json());  
// const api = "http://localhost:5000/tasks";

console.log(myLocalApi);

function App() {

  // const [tasks,setTasks] = useState([]);
  // const {data, error, isLoading} = useSWR('http://localhost:5000/tasks', fetcher);
  const {data, error, isLoading} = useSWR(`${myLocalApi}/tasks`, fetcher);
  // const {data, error, isLoading} = useSWR(api, fetcher);
  // const {data, error, isLoading} = useSWR(todoApi, fetcher);
  const { mutate } = useSWRConfig();

  
  const todoApi = axios.create({
    baseURL:`${myLocalApi}/tasks`,
    headers: {
      'Content-Type': 'application/json',
    }
  });


  const addTask = async (newTask)=>{

    // // server changes 
    // const res = await fetch("http://localhost:5000/tasks",{
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newTask),
    // });

    // await axios.post("http://localhost:5000/tasks",newTask,{
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });

    await todoApi.post("/",newTask);

    // revalidation
    // mutate("http://localhost:5000/tasks");
    mutate(`${myLocalApi}/tasks`);

    // console.log(data);
  }

  const removeTask = async (id)=>{

    // await axios.delete(`http://localhost:5000/tasks/${id}`);
    // mutate("http://localhost:5000/tasks");

    // const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    //   method: "DELETE"
    // });

    // mutate("http://localhost:5000/tasks");
  
    await todoApi.delete(`/${id}`);
    // mutate("http://localhost:5000/tasks");
    mutate(`${myLocalApi}/tasks`);


  }

  const doneTask = async (id,currentState)=>{
    // setTasks(tasks.map((task)=> task.id === id ? {...task, isDone: !task.isDone} : task));

    // const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    //   method: "PATCH",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({isDone: !currentState}),
    // });

    // mutate("http://localhost:5000/tasks");

    // try{
    //   await axios.patch(`http://localhost:5000/tasks/${id}`,{
    //     isDone: !currentState
    //   });
    //   mutate("http://localhost:5000/tasks");
    // }catch(error){
    //   alert({error});
    // }

    try{
      await todoApi.patch(`/${id}`,{ isDone: !currentState});
      // mutate("http://localhost:5000/tasks");
      mutate(`${myLocalApi}/tasks`);

    }catch(error){
      alert({error});
    }


  }

  return (
    <div className="p-10">
      <Heading/>
      <CreateTask isLoading={isLoading} addTask={addTask} />
      <TaskList tasks={data} removeTask={removeTask} doneTask={doneTask} isLoading={isLoading}/>

    </div>
  )
}

export default App
