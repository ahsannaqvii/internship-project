import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/api/todoList").then((res) => {
      console.log(res.data.id);
      setTodos(res.data);
      alert("success");
    });
  },[todos])
  
  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    Axios.post("http://localhost:4000/api/Todos", {
      Todo: todo.text,
    }).then(() => {
      console.log("Success!")
    });
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <>
      <h1>Todo List(Internship Project)</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} />
    </>
  );
}

export default TodoList;
