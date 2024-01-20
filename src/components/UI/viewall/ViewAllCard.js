import React from "react";
import "./ViewAllCard.css";

import Header from "./Header";
import Description from "./Description";
import Date from "./Date";
import Completed from "./Completed";
import PrimaryButton from "../../UI/buttons/PrimaryButton";

//receive data from viewall card here
function ViewAllCard({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <div className="ViewAllCard">
      <div className="ViewAllCard_Container">
        <div>
          {tasks.map((task) => {
            let color;

            switch (task.urgency) {
              case "High":
                color = "var(--high)";
                break;
              case "Medium":
                color = "var(--medium)";
                break;
              case "Low":
                color = "var(--low)";
                break;
              default:
                color = "var(--button-color)";
            }

            const taskStyle = {
              backgroundColor: color,
            };

            return (
              <div key={task.id} className="task_box" style={taskStyle}>
                <a onClick={() => onUpdateTask(task.id)} className="item3">
                  {task.completed ? (
                    <Completed>yes</Completed>
                  ) : (
                    <Completed>no</Completed>
                  )}
                </a>
                <a className="item2">
                  <Header>{task.name}</Header>
                </a>
                <a class="item5">
                  <Description>{task.description}</Description>
                </a>
                <a className="item4">
                  {/* {task.due_date} need to fox on backend to only show month and date*/}
                  <Date>date</Date>
                </a>
                <a onClick={() => onDeleteTask(task.id)} className="item1">
                  <p>delete</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewAllCard;
