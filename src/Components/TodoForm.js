import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";
function TodoForm(props) {
  const [input, setInput] = useState("");
  const [Id, setId] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Id,
      text: input,
    });
    setId(Id + 1);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <>
        <input
          placeholder="Add a todo"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
          ref={inputRef}
        />
   
        <button onClick={handleSubmit} className="todo-button">
          Add todo
        </button>
      </>
    </form>
  );
}

export default TodoForm;
