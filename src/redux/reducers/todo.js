import { createReducer } from "@reduxjs/toolkit";

export const todos = createReducer([], {
  TODOS: (state, action) => action.payload,
});
