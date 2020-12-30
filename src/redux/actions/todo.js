import { createAction } from "@reduxjs/toolkit";

const setTodos = createAction("TODOS");
export function getTodos() {
  return (dispatch) => {
    const todos = localStorage.getItem("todos");
    if (todos === null) return undefined;
    dispatch(setTodos(JSON.parse(todos)));
  };
}

const addTodosDone = createAction("TODOS_ADD");
export function addTodos(todos) {
  return (dispatch) => {
    const jsonTodos = JSON.stringify(todos);
    localStorage.setItem("todos", jsonTodos);
    dispatch(addTodosDone(true));
  };
}
