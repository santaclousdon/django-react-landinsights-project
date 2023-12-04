import * as React from "react";
import * as ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ajax_wrapper } from "functions";

import routes from "./routes";

// Load routes into browser
const router = createBrowserRouter(routes);

// Initializing React DOM management
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

window.secret_react_vars = {};
function save_csrf(value) {
    window.secret_react_vars["csrfmiddlewaretoken"] = value["csrfmiddlewaretoken"];
}

ajax_wrapper("GET", "/basics/csrfmiddlewaretoken/", {}, save_csrf);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Design Files
// https://www.figma.com/file/HqIi7zk6LNuNUjpmF38xIa/LandInsights-V2?type=design&node-id=109-11851&mode=design&t=W6FBfYFlNgVXl5Q5-0
// https://www.figma.com/file/6zTDaJnbwQdMkzpS4zNoF7/LandInsights-UX?type=whiteboard&node-id=0-1&t=BuQurwVHQZm8tHnL-0
// https://www.creative-tim.com/learning-lab/bootstrap/quick-start/soft-ui-dashboard
// https://mui.com/material-ui/
