import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar, Navbar, Loading } from "components";
import { ajax_wrapper } from "functions";

export default class InternalLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            sidebar_hidden: false,
            sidebar_pinned: false,
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
        window.secret_react_vars["user"] = value;
        this.setState({ loaded: true });
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

        let container_class = "g-sidenav-show";
        let sidebar_class = "";
        if (this.state.sidebar_hidden) {
            container_class = " g-sidenav-hidden";
            sidebar_class = "collapsed";
        }
        if (this.state.sidebar_pinned) {
            container_class += " g-sidenav-pinned";
            sidebar_class = "bg-white";
        }

        return (
            <div className={container_class}>
                <Loading loaded={this.state.loaded} >
                    <div>
                        <Sidebar
                            current_path={current_path}
                            current_location={current_location}
                            hidden={this.state.sidebar_hidden}
                            className={sidebar_class}
                        />
                        <main className="main-content position-relative border-radius-lg">
                            <Navbar
                                current_path={current_path}
                                current_location={current_location}
                                toggle_sidebar={() => this.setState({ sidebar_hidden: !this.state.sidebar_hidden })}
                                toggle_sidebar_pin={() => this.setState({ sidebar_pinned: !this.state.sidebar_pinned })}
                                scrolled={this.state.scrolled}
                            />
                            <div className="container-fluid py-4">
                                <div className="row">
                                    <Outlet context={{ user: this.state.user }} />
                                </div>
                            </div>
                        </main>
                    </div>
                </Loading>
            </div>
        );
    }
}
