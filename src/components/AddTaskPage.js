import { React, useState } from "react";
import "./AddTaskPage.css";

import Tasks from "../apis/Tasks";
import PrimaryButton from "./UI/buttons/PrimaryButton";

function AddTaskPage() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskUrgency, setTaskUrgency] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Tasks.post(Tasks.baseURL, {
        name: taskName,
        description: taskDescription,
        urgency: taskUrgency,
        due_date: taskDueDate,
        completed: taskCompleted,
      });

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
      <div className="CreatePage_Container">
        <label>Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <label>Urgency:</label>
        <select
          value={taskUrgency}
          onChange={(e) => setTaskUrgency(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label>Due Date:</label>
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />

        <label>Completed:</label>
        <input
          type="checkbox"
          checked={taskCompleted}
          onChange={(e) => setTaskCompleted(e.target.checked)}
        />

        <button type="submit" onClick={handleSubmit}>
          create
        </button>
        {/* <PrimaryButton onClick={handleCreateTask}>Create Task</PrimaryButton> */}
      </div>
    </div>
  );
}

export default AddTaskPage;
