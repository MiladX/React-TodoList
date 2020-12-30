import { useState } from "react";
import { Layout } from "antd";
import "../assets/css/App.css";
import "antd/dist/antd.css";

import TodoDisplay from "./todo/display";
import TodoAdd from "./todo/add";

function App() {
  const { Header, Content } = Layout;

  // States
  const [todoItemText, setTodoItemText] = useState("");
  const [todoItemId, setTodoItemId] = useState(1);
  const [todoItems, setTodoItems] = useState([]);

  const handleCheckBoxChange = (e) => {
    alert(e.target.checked);
    alert(e.target.value);
    setTodoItems((todoItems) => [
      ...todoItems,
      (todoItems[e.target.value].title = "test"),
    ]);
  };

  return (
    <>
      <Layout>
        <Header>Todos</Header>
        <Content>
          <TodoAdd />
          <TodoDisplay />
          {/* <ul>
            {todoItems.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  value={item.id}
                  onChange={handleCheckBoxChange}
                />
                {item.id}. {item.title}
              </li>
            ))}
          </ul> */}
        </Content>
      </Layout>
    </>
  );
}

export default App;
