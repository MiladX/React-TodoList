import { createReducer } from "@reduxjs/toolkit";

export const todos = createReducer([], {
  TODOS: (state, action) => action.payload,
});

export const addTodosDone = createReducer(false, {
  TODOS_ADD: (state, action) => action.payload,
});
