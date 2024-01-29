import React, { Component } from "react";

import { prettify_string } from "functions";

import internal_routes from "../routes/internal";

const ROUTE_ICONS = {
    saved_filters: "filter",
    campaigns: "envelope-open-text",
    my_markets: "bullseye",
    admin: "lock",
};

class NavItem extends Component {
    render() {
        let icon_type = "search";
        if (this.props.name in ROUTE_ICONS) {
            icon_type = ROUTE_ICONS[this.props.name];
        }

        let nav_image = (
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                <i
                    className={`fas fa-${icon_type}`}
                    style={{
                        opacity: 1,
                        fontSize: "14px",
                        position: "relative",
                        top: "0px",
                        left: "0px",
                    }}
                ></i>
            </div>
        );

        let active = "";
        if (
            this.props.current == this.props.name ||
            (this.props.current == "home" && this.props.name == "market_research")
        ) {
            active = "active";
        }

        return (
            <li className="nav-item">
                <a className={`nav-link ${active}`} href={this.props.path}>
                    {nav_image}
                    <span className="nav-link-text ms-1">{prettify_string(this.props.name)}</span>
                </a>
            </li>
        );
    }
}

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = { error: "" };
    }

    render() {
        let sidebar_class = "";
        if (this.props.hidden) {
            sidebar_class = "collapsed";
        }

        let nav_items = [];
        for (let item of internal_routes[0]["children"]) {
            if (item["path"] === "") {
                continue;
            }

            if (
                item["path"] === "admin" &&
                (!window.secret_react_vars["user"] || !window.secret_react_vars["user"]["is_staff"])
            ) {
                continue;
            }
            nav_items.push(
                <NavItem name={item["path"]} path={`/home/${item["path"]}`} current={this.props.current_location} />
            );
        }

        return (
            <aside
                className={`sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ${sidebar_class}`}
                id="sidenav-main"
            >
                <div className="sidenav-header text-center">
                    <a className="navbar-brand m-0" href="/" target="_blank">
                        <img
                            src="/static/images/land_insights_logo.png"
                            style={{ maxWidth: "250px", height: "auto", transform: "scale(1.5)" }}
                            alt="Your Logo"
                        />
                    </a>
                </div>

                <hr className="horizontal dark mt-0" />

                <div className="collapse navbar-collapse w-auto h-auto" style={{ paddingBottom: "50px" }}>
                    <ul className="navbar-nav">{nav_items}</ul>
                </div>
                <div className="sidenav-footer mx-3 mt-3 pt-3"></div>
            </aside>
        );
    }
}
