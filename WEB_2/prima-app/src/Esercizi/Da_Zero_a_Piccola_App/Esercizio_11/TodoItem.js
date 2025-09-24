import React from "react";

const TodoItem = ({ task, handleDeleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{task.text}</span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          handleDeleteTask(task.id);
        }}
      >
        Elimina
      </button>
    </li>
  );
};

export default TodoItem;
