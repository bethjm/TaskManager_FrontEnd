import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./AddTaskPage.css";

import Tasks from "../apis/Tasks";
import CheckBox from "./UI/images/checkbox.png";
import NoCheck from "./UI/images/non_checkbox.png";

function AddTaskPage({ setShowNavBar }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskUrgency, setTaskUrgency] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);

  //hides the nav bar
  useEffect(() => {
    setShowNavBar(false);
    return () => {
      setShowNavBar(true);
    };
  }, [setShowNavBar]);

  const navigation = useNavigate();

  //submits the info then brings to tasks page
  const handleSubmit = async (e) => {
    e.preventDefault();

    //this checks to make sure feilds are filled out
    if (!taskName || !taskDescription || !taskDueDate || !taskUrgency) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await Tasks.post(Tasks.baseURL, {
        name: taskName,
        description: taskDescription,
        urgency: taskUrgency,
        due_date: taskDueDate,
        completed: taskCompleted,
      });
      //sends you back to the homepage after everything is sumbitted
      navigation("/");

      if (response.status === 201) {
        console.log("Task created successfully!");
      } else {
        console.error(
          "Failed to create task. Server returned:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };

  return (
    <div className="CreatePage">
      <h2>ADD ITEM</h2>
      <hr />
      <div className="CreatePage_Container">
        {/* <h2>ADD ITEM</h2>
        <hr /> */}
        <input
          className="taskName"
          placeholder="Title"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <textarea
          className="desc"
          placeholder="Description"
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <div className="due_date">
          <label>Date:</label>
          <input
            className="date_selection"
            type="date"
            value={taskDueDate}
            onChange={(e) => setTaskDueDate(e.target.value)}
          />
        </div>

        <label id="urgency_title">Urgency:</label>
        <div className="urgency_box">
          <button
            id="high_button"
            type="button"
            onClick={() => setTaskUrgency("High")}
          >
            High
          </button>
          <button
            id="medium_button"
            type="button"
            onClick={() => setTaskUrgency("Medium")}
          >
            Medium
          </button>
          <button
            id="low_button"
            type="button"
            onClick={() => setTaskUrgency("Low")}
          >
            Low
          </button>
        </div>
        <label id="completed_title">Completed:</label>
        <div className="completed_box">
          <img
            id="checked_box"
            src={CheckBox}
            alt={"a box with a check in it to signify completed task"}
            checked={taskCompleted}
            onChange={(e) => setTaskCompleted(e.target.checked)}
          />
          <img
            src={NoCheck}
            alt={
              "an epmty box without a check in it to signify incomplete task"
            }
          />
        </div>

        <button className="submit_button" type="submit" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTaskPage;
