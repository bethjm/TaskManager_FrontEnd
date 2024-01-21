import React from "react";
import "./ViewAllCard.css";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

import Header from "./Header";
import Description from "./Description";

import Delete from "../images/delete_svg.png";
import Finished from "../images/checkbox.png";
import NotFinished from "../images/non_checkbox.png";

const formatDate = (rawDate) => {
  //in case of bad data return empty string
  if (!rawDate) {
    return "";
  }

  //reformats the date
  const formattedDate = format(new Date(rawDate), "M.d", { locale: enUS });
  return formattedDate;
};

function ViewAllCard({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <div className="ViewAllCard">
      <div className="ViewAllCard_Container">
        <h1>TO DO LIST</h1>
        <hr />
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
                    <img src={Finished} />
                  ) : (
                    <img src={NotFinished} />
                  )}
                </a>
                <a className="item2">
                  <Header>
                    {task.name}: {formatDate(task.due_date)}
                  </Header>
                </a>
                <a className="item5">
                  <Description>{task.description}</Description>
                </a>
                <a onClick={() => onDeleteTask(task.id)} className="item1">
                  <img src={Delete} />
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
