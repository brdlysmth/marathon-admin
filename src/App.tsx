import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Overlay from "./components/Overlay";
import { Router, RouteComponentProps } from "@reach/router";
import Orders from "./components/Orders";
import AssignedHardware from "./components/Assigned";
import UnassignedHardware from "./components/Unassigned";
import Purchase from "./components/Purchase";
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
      path: "/orders",
      Component: Orders,
    },
    {
      path: "/hardware",
      Component: AssignedHardware,
    },
    {
      path: "/unassigned",
      Component: UnassignedHardware,
    },
    {
      path: "/purchase",
      Component: Purchase,
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
