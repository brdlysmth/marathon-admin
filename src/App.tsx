import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Overlay from "./components/Overlay";
import { Router, RouteComponentProps } from "@reach/router";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Incoming from "./components/Incoming";
import Outgoing from "./components/Outgoing";
import { colors } from "./theme";
const { Header, Content, Footer, Sider } = Layout;

interface RouteProps {
  path: string;
  Component: React.ComponentType<RouteComponentProps<{}>>;
  forceLogout?: boolean;
}

const App: React.FC = () => {
  const routes: RouteProps[] = [
    {
      path: "/home",
      Component: Home,
    },
    {
      path: "/projects",
      Component: Projects,
    },
    {
      path: "/incoming",
      Component: Incoming,
    },
    {
      path: "/outgoing",
      Component: Outgoing,
    },
  ];

  return (
    <div className="App">
      <Overlay>
        <Content>
          <Router>
            {routes.map(({ Component, path }) => (
              <Component path={path} key={path} />
            ))}
          </Router>
        </Content>
      </Overlay>
    </div>
  );
};

export default App;
