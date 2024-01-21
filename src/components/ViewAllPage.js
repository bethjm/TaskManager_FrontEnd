import { React, useEffect, useContext } from "react";
import "./ViewAllPage.css";
import { TaskContext } from "../context/TaskContext";

import Tasks from "../apis/Tasks";
import ViewAllCard from "./UI/viewall/ViewAllCard";

function ViewAllPage() {
  const { tasks, setTasks } = useContext(TaskContext);

  //read
  useEffect(() => {
    (async () => {
      try {
        const response = await Tasks.get(Tasks.baseURL);
        setTasks(response.data.rows);
        console.log(response.data.rows);
        console.log("read the data");
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // if (tasks.length >= 1) {
  //   //storing the data in session storage
  //   sessionStorage.setItem("key", "value");
  //   console.log("MODAAAL");
  //   //get the data
  //   const storedValue = sessionStorage.getItem("key");
  //   console.log("Stored Value:", storedValue);

  //   //remove the data
  //   sessionStorage.removeItem("key");
  //   console.log("MODAAAL");
  // }

  //delete
  const handleDeleteTask = async (id) => {
    try {
      const response = await Tasks.delete(
        `http://localhost:3009/api/tasks/${id}`
      );
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
      console.log("Task deleted successfully!");
      console.log(tasks);
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  //edit completed option
  const handleUpdateTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="ViewAllPage">
      <div className="ViewAllPage_Container">
        <ViewAllCard
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
        />
      </div>
    </div>
  );
}

export default ViewAllPage;
