import { createAction } from "@reduxjs/toolkit";

const setTask = createAction("TASK");
const setTaskId = createAction("TASK_ID");

export function getTask() {
  return (dispatch) => dispatch(setTask(localStorage.getItem("task")));
}

export function addTask(task) {
  localStorage.setItem("task", task);
  return (dispatch) => dispatch(setTask(localStorage.getItem("task")));
}

export function getTaskId() {
  return (dispatch) => dispatch(setTaskId(localStorage.getItem("taskId")));
}

export function addTaskId(id) {
  localStorage.setItem("taskId", id);
  return (dispatch) => dispatch(setTaskId(localStorage.getItem("taskId")));
}
