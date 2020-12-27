import { createAction } from "@reduxjs/toolkit";

const setTodos = createAction("TODOS");

export function getTodos() {
  return (dispatch) => dispatch(setTodos(localStorage.getItem("todos")));
}

export function addTodos(todos) {
  localStorage.setItem("todos", todos);
  return (dispatch) => dispatch(setTodos(localStorage.getItem("todos")));
}
