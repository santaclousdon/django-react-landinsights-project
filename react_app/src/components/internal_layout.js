import React, { Component } from "react";
import { Outlet } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

import { Navbar, Footer } from "library";

export default class InternalLayout extends Component {
    render() {
        return (
            <div>
                <Outlet />
            </div>
        );
    }
}
