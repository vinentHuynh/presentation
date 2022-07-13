import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "./index.css";
import App from "./App";
import FullPage from "./Components/FullPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />

    <FullPage />
  </React.StrictMode>
);
