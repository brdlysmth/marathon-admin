import React from "react";
import "./App.css";
import { Router, RouteComponentProps, Redirect } from "@reach/router";
import { colors } from "./theme";
import Landing from "./components/Landing";
import ChoosePlan from './components/ChoosePlan';

interface RouteProps {
  path: string;
  Component: React.ComponentType<RouteComponentProps<{}>>;
  forceLogout?: boolean;
}

const App: React.FC = () => {
  const routes: RouteProps[] = [
    {
      path: "/",
      Component: Landing
    },
    {
      path: "/plan",
      Component: ChoosePlan
    },
  ];

  return (
    <div className="App">
      {/* <Overlay> */}
          <Router>
            {routes.map(({ Component, path }) => (
              <Component path={path} key={path} />
            ))}
          </Router>
      {/* </Overlay> */}
    </div>
  );
};

export default App;
