import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "./context/context";
import { AuthProvider } from "./context/auth-context";
import { ShortenUrlProvider } from "react-shorten-url";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <MainProvider>
          <ShortenUrlProvider
            config={{ accessToken: process.env.REACT_APP_BITLY }}>
            <App />
          </ShortenUrlProvider>
        </MainProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
