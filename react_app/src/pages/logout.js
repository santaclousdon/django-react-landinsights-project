import React, { Component } from "react";

import { clear_token } from "functions";
import { Card } from "library";

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
