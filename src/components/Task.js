import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="taskContainer">
      <div className="taskContentBox">
        <h5>{title}</h5>
        <span>{description}</span>
      </div>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
