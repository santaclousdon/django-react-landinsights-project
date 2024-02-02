import React, { Component } from "react";

import { Card } from "library";

export default class Landing extends Component {
    componentDidMount() {
        window.location.href = "/home";
    }

    render() {
        return (
            <Card>
                <div className="card-header text-center pt-4"></div>
                <div className="card-body">You are being redirected, please wait . . . </div>
            </Card>
        );
    }
}
