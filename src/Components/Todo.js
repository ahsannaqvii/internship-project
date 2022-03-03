import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import "./Todo.css";

const Todo = ({ todos, removeTodo }) => {
  return todos.map((todo, index) => (
    <div className={"todo-row "} key={index}>

      <div>
        {todo.task}
      </div>
      <div className="icons">
        <AiFillCloseCircle
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
