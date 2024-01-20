import React from "react";
import "./ViewAllCard.css";

import Header from "./Header";
import Description from "./Description";
import Urgency from "./Urgency";
import Date from "./Date";
import Completed from "./Completed";
import PrimaryButton from "../../UI/buttons/PrimaryButton";

//receive data from viewall card here
function ViewAllCard({ tasks }) {
  return (
    <div className="ViewAllCard">
      <div className="ViewAllCard_Container">
        {tasks.map((task) => (
          <div key={task.id}>
            <Header>{task.name}</Header>
            <Description>{task.description}</Description>
            <Urgency>{task.urgency}</Urgency>
            <Date>{task.due_date}</Date>
            {task.completed ? (
              <Completed>yes</Completed>
            ) : (
              <Completed>no</Completed>
            )}

            <PrimaryButton>update</PrimaryButton>
            <br />
            <PrimaryButton>delete</PrimaryButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllCard;
