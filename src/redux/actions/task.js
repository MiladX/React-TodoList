import { createAction } from "@reduxjs/toolkit";

const setTask = createAction("TASK");
export function getTask() {
  return (dispatch) => dispatch(setTask(localStorage.getItem("task")));
}

const setTaskId = createAction("TASK_ID");
export function getTaskId() {
  return (dispatch) => dispatch(setTaskId(localStorage.getItem("taskId") ?? 1));
}

const addTaskDone = createAction("TASK_ADD_DONE");
export function addTask(task) {
  localStorage.setItem("task", task);
  return (dispatch) => dispatch(addTaskDone(true));
}

const addTaskIdDone = createAction("TASK_ID_ADD_DONE");
export function addTaskId(id) {
  console.log(id);
  let newId = id ? parseInt(id) + 1 : 1;
  localStorage.setItem("taskId", newId);
  return (dispatch) => dispatch(addTaskIdDone(true));
}
