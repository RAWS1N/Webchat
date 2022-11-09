import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
