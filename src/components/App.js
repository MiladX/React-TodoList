import { Layout } from "antd";
import "../assets/css/App.css";
import "antd/dist/antd.css";

import TodoDisplay from "./todo/Display";
import TodoAdd from "./todo/Add";

function App() {
  const { Header, Content } = Layout;

  return (
    <>
      <Layout>
        <Header>Todos</Header>
        <Content>
          <TodoAdd />
          <TodoDisplay />
        </Content>
      </Layout>
    </>
  );
}

export default App;
