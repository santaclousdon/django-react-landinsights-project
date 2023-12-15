import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar, Navbar } from "components";
import { ajax_wrapper } from "functions";

export default class InternalLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    componentDidMount() {
        ajax_wrapper("GET", "/user/user/", {}, (value) => this.setState({ user: value, loaded: true }));
    }

    render() {
        let current_path = window.location.pathname;
        if (current_path.endsWith("/")) {
            current_path = current_path.slice(0, current_path.length - 1);
        }

        current_path = current_path.split("/");
        let current_location = current_path.pop();

        return (
            <div>
                <Sidebar current_path={current_path} current_location={current_location} />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                    <Navbar current_path={current_path} current_location={current_location} />
                    <div className="container-fluid py-4">
                        <div className="row">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
