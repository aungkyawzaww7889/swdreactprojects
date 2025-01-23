import React, { Profiler, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";

const App = () => {
  

  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  };

  return (
    <TaskProvider>
        <div className=" p-10">
          <Profiler id="App" onRender={onRender}>
            <Heading />
            <CreateTask/>
            <TaskList/>
          </Profiler>
      </div>
    </TaskProvider>
  );
};

export default App;