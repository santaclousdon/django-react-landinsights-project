import React, { Component } from "react";

import { prettify_string } from "functions";
import { Button } from "library";

export default class Navbar extends Component {
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

        return (
            <nav
                className="navbar navbar-main navbar-expand-lg mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
                id="navbarBlur"
                data-scroll="true"
            >
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">{crumbs}</ol>
                    </nav>
                    {/* <div className="sidenav-toggler sidenav-toggler-inner d-xl-block d-none">
                        <a href="javascript:;" className="nav-link text-body p-0">
                            <div className="sidenav-toggler-inner">
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                            </div>
                        </a>
                    </div> */}
                    <div style={{ float: "right" }}>
                        <Button style={{ margin: "0px" }} href={`/logout`} type="outline-secondary">
                            Logout
                        </Button>
                    </div>
                </div>
            </nav>
        );
    }
}
