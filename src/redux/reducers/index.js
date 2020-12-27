import { combineReducers } from "redux";
import { todos } from "./todo";
import { task, taskId } from "./task";

export default combineReducers({
  todos,
  task,
  taskId,
});
