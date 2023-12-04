import React, { Component } from "react";

export default class MyCard extends Component {
    render() {
        return <div className="card">{this.props.children}</div>;
    }
}
