import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar, Navbar } from "components";
import { ajax_wrapper } from "functions";

export default class InternalLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            sidebar_hidden: false,
            scrolled: false,
        };

        this.load_user = this.load_user.bind(this);
        this.check_scroll = this.check_scroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.check_scroll);

        ajax_wrapper("GET", "/user/user/", {}, this.load_user);
    }

    load_user(value) {
        this.setState({ loaded: true });
        window.secret_react_vars["user"] = value;
    }

    check_scroll() {
        let position = window.scrollY;
        if (position > 0 && !this.state.scrolled) {
            this.setState({ scrolled: true });
        } else if (position == 0 && this.state.scrolled) {
            this.setState({ scrolled: false });
        }
    }

    render() {
        let current_path = window.location.pathname;
        if (current_path.endsWith("/")) {
            current_path = current_path.slice(0, current_path.length - 1);
        }

        current_path = current_path.split("/");
        let current_location = current_path.pop();

        let container_class = "g-sidenav-pinned";
        if (this.state.sidebar_hidden) {
            container_class = "g-sidenav-hidden";
        }

        return (
            <div className={container_class}>
                <Sidebar
                    current_path={current_path}
                    current_location={current_location}
                    hidden={this.state.sidebar_hidden}
                />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                    <Navbar
                        current_path={current_path}
                        current_location={current_location}
                        toggle_sidebar={() => this.setState({ sidebar_hidden: !this.state.sidebar_hidden })}
                        scrolled={this.state.scrolled}
                    />
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
