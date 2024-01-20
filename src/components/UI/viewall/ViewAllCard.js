import React from "react";
import "./ViewAllCard.css";

import Header from "./Header";
import Description from "./Description";
import Urgency from "./Urgency";
import Date from "./Date";
import Completed from "./Completed";
import PrimaryButton from "../../UI/buttons/PrimaryButton";

//receive data from viewall card here
function ViewAllCard({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <div className="ViewAllCard">
      <div className="ViewAllCard_Container">
        {tasks.map((task) => (
          <div key={task.id}>
            <Header>{task.name}</Header>
            <Description>{task.description}</Description>
            <Urgency>{task.urgency}</Urgency>
            <Date>{task.due_date}</Date>

            <a onClick={() => onUpdateTask(task.id)}>
              {task.completed ? (
                <Completed>yes</Completed>
              ) : (
                <Completed>no</Completed>
              )}
            </a>
            {/* maybe update feature here?have a different color button render depepdning on yes or no */}

            <br />
            <button onClick={() => onDeleteTask(task.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllCard;
