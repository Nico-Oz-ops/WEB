import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDeleteTask }) => {
  console.log("todolist->", tasks);
  return (
    <ul className="list-group">
      {tasks.map((t) => {
        return (
          <TodoItem
            key={t.id}
            tasks={t}
            handleDeleteTask={onDeleteTask}
          ></TodoItem>
        );
      })}
    </ul>
  );
};

export default TodoList;
