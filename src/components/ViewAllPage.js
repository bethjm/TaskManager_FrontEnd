import { React, useEffect, useState } from "react";
import "./ViewAllPage.css";

import Tasks from "../apis/Tasks";
import ViewAllCard from "./UI/viewall/ViewAllCard";

function ViewAllPage() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="ViewAllPage">
      <div className="ViewAllPage_Container">
        <h1>hello from view all page</h1>
        <ViewAllCard tasks={tasks} />
      </div>
    </div>
  );
}

export default ViewAllPage;
