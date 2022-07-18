import React, { useEffect, useState } from "react";
import Task from "./Task";
import logo from "../assets/logo.png";
const Home = () => {
  const initialTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [taskList, setTaskList] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      return alert("Please Enter A Task Details");
    }
    setTaskList([...taskList, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredTask = taskList.filter((el, i) => {
      return i !== index;
    });

    setTaskList(filteredTask);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="mainContainer">
      <div className="contentBox">
        <img src={logo} alt="logo" id="logo" />
        <h1>My Todo</h1>
        <h5>Complete Your Daily Todo List </h5>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button>ADD</button>
        </form>
        {taskList.map((el, index) => (
          <Task
            key={index}
            title={el.title}
            description={el.description}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </div>
      <h5>Developed By Harsh Dubey</h5>
    </div>
  );
};

export default Home;
