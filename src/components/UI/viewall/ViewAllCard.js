import React from "react";
import "./ViewAllCard.css";

import Header from "./Header";
import Description from "./Description";
import Urgency from "./Urgency";
import Date from "./Date";

import PrimaryButton from "../../UI/buttons/PrimaryButton";

//receive data from viewall card here
function ViewAllCard() {
  return (
    <div className="ViewAllCard">
      <div className="ViewAllCard_Container">
        <Header>header</Header>
        <Description>decription</Description>
        <Urgency>urgency</Urgency>
        <Date>date</Date>

        <PrimaryButton>update</PrimaryButton>
      </div>
    </div>
  );
}

export default ViewAllCard;
