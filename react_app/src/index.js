import * as React from "react";
import * as ReactDOM from "react-dom";

import "mapbox-gl/dist/mapbox-gl.css";

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
