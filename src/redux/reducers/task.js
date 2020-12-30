import { createReducer } from "@reduxjs/toolkit";

export const task = createReducer("", {
  TASK: (state, action) => action.payload,
});

export const taskId = createReducer(0, {
  TASK_ID: (state, action) => action.payload,
});

export const addTaskDone = createReducer(false, {
  TASK_ADD_DONE: (state, action) => action.payload,
});

export const addTaskIdDone = createReducer(false, {
  TASK_ID_ADD_DONE: (state, action) => action.payload,
});
