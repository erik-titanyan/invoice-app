import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Router from "./config/router/Router";
import { routes } from "./config/router/routing";

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Router routes={routes} />
    </Layout>
  );
};

export default App;
