import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "react-widgets/styles.css";
import "./style/header.css";
import "./style/card.css";
import "./style/MenuBar.css";

import "./style/TopCoctails.css";
import "./style/PopularSection.css";
import "./style/footer.css";
import "./style/cart.css";
import "./style/confirmation-page.css";
import "./style/common.css";
import "./style/about-dish.css";
import "./style/div.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
