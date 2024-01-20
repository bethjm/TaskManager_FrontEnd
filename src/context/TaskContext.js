import React, { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};

//using this to be able to easily pass data around the app without having to lift state
