import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainProvider>
        <App />
      </MainProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
