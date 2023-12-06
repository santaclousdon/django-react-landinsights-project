import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <nav
                className="navbar navbar-main navbar-expand-lg mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
                id="navbarBlur"
                data-scroll="true"
            >
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                            <li className="breadcrumb-item text-sm">
                                <a className="opacity-5 text-dark" href="javascript:;">
                                    Pages
                                </a>
                            </li>
                            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">
                                Default
                            </li>
                        </ol>
                        <h6 className="font-weight-bolder mb-0">Default</h6>
                    </nav>
                    <div className="sidenav-toggler sidenav-toggler-inner d-xl-block d-none">
                        <a href="javascript:;" className="nav-link text-body p-0">
                            <div className="sidenav-toggler-inner">
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                            </div>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar"></div>
                </div>
            </nav>
        );
    }
}
