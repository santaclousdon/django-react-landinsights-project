import React, { Component } from "react";

import { clear_token } from "functions";

// @mui material components
import Card from "@mui/material/Card";

export default class Logout extends Component {
    componentDidMount() {
        clear_token();
        window.location = "/";
    }

    render() {
        return (
            <Card>
                <div style={{ textAlign: "center" }}>
                    <h5>Logging out...</h5>
                </div>
            </Card>
        );
    }
}
