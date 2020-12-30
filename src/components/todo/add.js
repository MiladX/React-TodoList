import { useDispatch, useSelector } from "react-redux";
import { addTodos, getTodos } from "../../redux/actions/todo";
import {
  addTask,
  addTaskId,
  getTask,
  getTaskId,
} from "../../redux/actions/task";
import { useEffect } from "react";

function TodoAdd() {
  const dispatch = useDispatch();

  //States
  const todos = useSelector((state) => state.todos);
  const task = useSelector((state) => state.task);
  const taskId = useSelector((state) => state.taskId);

  useEffect(() => {
    dispatch(getTodos());
    dispatch(getTask());
    dispatch(getTaskId());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(addTask(e.target.value));
    dispatch(getTask());
  };

  const handleClick = () => {
    if (task) {
      dispatch(addTaskId(taskId));
      dispatch(getTaskId());
      dispatch(addTodos([...todos, { id: taskId, title: task }]));
      dispatch(getTodos());
      dispatch(addTask(""));
      dispatch(getTask());
    } else alert("Please Enter Todo Item Text!");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      Title:{" "}
      <input
        type="text"
        value={task}
        onChange={handleChange}
        style={{ width: "400px" }}
      />
      <button style={{ marginLeft: "10px" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default TodoAdd;
