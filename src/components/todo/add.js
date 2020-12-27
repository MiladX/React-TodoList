import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../../redux/actions/todo";
import { addTask, addTaskId } from "../../redux/actions/task";

function TodoAdd() {
  const dispatch = useDispatch();

  //States
  const todos = useSelector((state) => state.todos);
  const task = useSelector((state) => state.task);
  const taskId = useSelector((state) => state.taskId);

  const handleChange = (e) => {
    dispatch(addTask(e.target.value));
  };

  const handleClick = () => {
    if (task) {
      dispatch(addTodos((todos) => [...todos, { id: taskId, title: task }]));
      dispatch(addTaskId(taskId + 1));
      dispatch(addTask(""));
    } else alert("Please Enter Todo Item Text!");
  };

  return (
    <>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default TodoAdd;
