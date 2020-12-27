import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { getTodos } from "../../redux/actions/todo";

function TodoDisplay() {
  const dispatch = useDispatch();

  //States
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return <>{todos}</>;
}

export default TodoDisplay;
