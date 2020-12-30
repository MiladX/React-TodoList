import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";
import { addTodos, getTodos } from "../../redux/actions/todo";

function TodoDisplay() {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => {
            var newTodos = todos.filter((todo) => todo.id !== record.id);
            dispatch(addTodos(newTodos));
            dispatch(getTodos());
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  //States
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <Table columns={columns} dataSource={todos} rowKey={(r) => r.id} />
    </div>
  );
}

export default TodoDisplay;
