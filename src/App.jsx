import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo.jsx";
import { CompleteTodo } from "./components/completeTodo.jsx";
import { IncompleteTodo } from "./components/incompleteTodo";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };

  const onClickComplete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);

    const newTodo2 = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodo2);
  };

  const onClickBack = (index) => {
    const newTodo = [...completeTodos];
    newTodo.splice(index, 1);
    setCompleteTodos(newTodo);

    const newTodo2 = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodo2);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるToDoは5個までです</p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
