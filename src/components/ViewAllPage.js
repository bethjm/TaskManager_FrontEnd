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
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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

  return (
    <div className="ViewAllPage">
      <div className="ViewAllPage_Container">
        <h1>hello from view all page</h1>
        <ViewAllCard tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default ViewAllPage;
