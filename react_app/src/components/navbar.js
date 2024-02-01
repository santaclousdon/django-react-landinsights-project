import React, { Component } from "react";

import { prettify_string } from "functions";
import { Button } from "library";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let crumbs = [];
        let path = this.props.current_path;
        let last_step = this.props.current_location;

        let last_crumb = (
            <li className="breadcrumb-item text-sm text-dark font-weight-bolder active" aria-current="page">
                {prettify_string(last_step)}
            </li>
        );

        let redirect_path = "/";
        for (let step of path) {
            if (step === "") {
                continue;
            }
            redirect_path += step + "/";
            crumbs.push(
                <li className="breadcrumb-item text-sm">
                    <a className="opacity-5 text-dark" href={redirect_path}>
                        {prettify_string(step)}
                    </a>
                </li>
            );
        }
        crumbs.push(last_crumb);

        let navbar_class = "shadow-none";
        if (this.props.scrolled) {
            navbar_class = "blur shadow-blur left-auto";
        }

        return (
            <nav
                className={`navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 border-radius-xl z-index-sticky ${navbar_class}`}
                id="navbarBlur"
                data-scroll="true"
            >
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">{crumbs}</ol>
                    </nav>
                    <div
                        className="sidenav-toggler sidenav-toggler-inner d-xl-block d-none"
                        onClick={this.props.toggle_sidebar}
                    >
                        <a className="nav-link text-body p-0" style={{ cursor: "pointer" }}>
                            <div className="sidenav-toggler-inner">
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                            </div>
                        </a>
                    </div>

                    <div class="ms-md-auto pe-md-3 d-flex align-items-center"></div>

                    <div style={{ float: "right" }}>
                        <ul class="navbar-nav  justify-content-end">
                            <li class="nav-item d-xl-none d-flex align-items-center">
                                <a
                                    style={{ cursor: "pointer" }}
                                    class="nav-link text-body p-0"
                                    onClick={this.props.toggle_sidebar_pin}
                                >
                                    <div class="sidenav-toggler-inner">
                                        <i class="sidenav-toggler-line"></i>
                                        <i class="sidenav-toggler-line"></i>
                                        <i class="sidenav-toggler-line"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item d-flex ps-3 align-items-center">
                                <Button style={{ margin: "0px" }} href={`/logout`} type="outline-secondary">
                                    Logout
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
