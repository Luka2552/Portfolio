import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import "./index.css";

const root = document.getElementById("root");

const renderMethod = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

const render = (Component) => {
  renderMethod(<Component />, root);
};

const createRoot = ReactDOM.unstable_createRoot || ReactDOM.createRoot;

const rootInstance = createRoot(root);

rootInstance.render(<App />);
