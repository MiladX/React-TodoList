import { createReducer } from "@reduxjs/toolkit";

export const task = createReducer("", {
  TASK: (state, action) => action.payload,
});

export const taskId = createReducer(1, {
  TASK_ID: (state, action) => action.payload,
});
