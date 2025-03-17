import React from "react";
import { useState } from "react";

function App() {

  const {mydata,setmyData} = useState("hello");

  const apiHandler = () =>{
    // console.log("Hay");
    // fetch("http://localhost:5000/tasks").then(res => res.json())
    // .then(data => console.log(data));

    fetch("http://localhost:5000/tasks")
    .then(res => res.json())
    .then( (datas) => {
      datas.map((data,idx) => (
       console.log(data.title)
      ))
    });


    // fetch("http://localhost:5000/tasks/1").then(res => res.json())
    // .then(data => console.log(data));

    // fetch("http://localhost:5000/tasks/3").then(res => res.json())
    // .then(data => console.log(data));
  }

  return (
    <>
      <button className='bg-lime-600 text-white rounded-md p-2 m-5' onClick={apiHandler}>Api call</button>
      <ul>
        <li>{mydata}</li>
      </ul>
    </>
  )
}

export default App
