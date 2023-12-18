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

        this.load_user = this.load_user.bind(this);
    }

    componentDidMount() {
        ajax_wrapper("GET", "/user/user/", {}, this.load_user);
    }

    load_user(value) {
        this.setState({ loaded: true });
        window.secret_react_vars["user"] = value;
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
                            <Outlet context={{ user: this.state.user }} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
