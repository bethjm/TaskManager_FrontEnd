import React from "react";
import "./ViewAllCard.css";

import Header from "./Header";
import Description from "./Description";
import Urgency from "./Urgency";
import Date from "./Date";

import PrimaryButton from "../../UI/buttons/PrimaryButton";

//receive data from viewall card here
function ViewAllCard({ tasks }) {
  //   console.log("TASKS FROM VIEW CALL CAAAARRRDDDD", tasks);
  //   console.log("TTRYING TO ACCESS IN DATA PIECES", tasks);

  return (
    <div className="ViewAllCard">
      <div className="ViewAllCard_Container">
        {tasks.map((task) => (
          <div>
            <Header>{task.name}</Header>
            <Description>{task.decription}</Description>
            <Urgency>{task.urgency}</Urgency>
            {/* need to fox date on backend */}
            <Date>{task.due_date}</Date>
            {/* need to add compelted here */}
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
