import { combineReducers } from "redux";
import { todos, addTodosDone } from "./todo";
import { task, taskId, addTaskDone, addTaskIdDone } from "./task";

export default combineReducers({
  todos,
  addTodosDone,
  task,
  taskId,
  addTaskDone,
  addTaskIdDone,
});
