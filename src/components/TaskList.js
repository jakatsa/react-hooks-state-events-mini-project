import React from "react";
import Task from "./Task";
function TaskList({ tasks, deletedItem }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          deletedItem={deletedItem}
        />
      ))}
    </div>
  );
}

export default TaskList;
