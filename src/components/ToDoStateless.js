import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const ToDoStateless = () => {
  const [state, changeState] = useState({
    title: "ToDo List",
    todos: [
      { task: "buy a bred", complited: false, key: "buy a bred" },
      { task: "buy a car", complited: false, key: "buy a car" },
    ],
    value: "",
  });

  const handleChange = (event) => {
    changeState({
      ...state,
      value: event.target.value,
    });
  };

  const toggleTask = (event) => {
    console.log(event.target.innerText);
    changeState({
      ...state,
      todos: state.todos.map((todo) =>
        event.target.innerText === todo.key
          ? ({...todo, complited: !todo.complited})
          : todo
      ),
    });
  };

  const handleClick = () => {
    changeState({
      ...state,
      todos: state.todos.concat({
        key: state.value,
        task: state.value,
        complited: false,
      }),
      value: "",
    });
    console.log(state.value);
    console.log(state);
  };

  return (
    <>
      <h2>{state.title}</h2>
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.task}
            onClick={toggleTask}
            style={todo.complited ? { textDecoration: "line-through" } : null}
          >
            {todo.task}
          </li>
        ))}
      </ul>
      <form>
        <Input handleChange={handleChange} value={state.value} />
        <Button handleClick={handleClick} />
      </form>
    </>
  );
};
