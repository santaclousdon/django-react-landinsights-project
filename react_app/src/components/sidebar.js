import React, { Component } from "react";

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        let drop_class = "inner-nav height-animate";
        if (this.state.open) {
            drop_class = "inner-nav height-animate show";
        }

        return (
            <li className="nav-item">
                <a
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                        <i
                            className="fas fa-search"
                            aria-hidden="true"
                            style={{
                                opacity: 1,
                                fontSize: "14px",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                            }}
                        ></i>
                    </div>
                    <span className="nav-link-text ms-1">Market Research</span>
                </a>
                <div className={drop_class}>
                    <ul className="nav ms-4 ps-3">
                        <li className="nav-item">
                            <a className="nav-link mt-3" href="/home">
                                <span className="sidenav-normal"> Market Data </span>
                            </a>
                        </li>
                    </ul>
                </div>
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
        return (
            <aside
                className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
                id="sidenav-main"
            >
                <div className="sidenav-header">
                    <a
                        className="navbar-brand m-0"
                        href=" https://demos.creative-tim.com/soft-ui-dashboard-pro/pages/dashboards/default.html "
                        target="_blank"
                    >
                        <span className="ms-1 font-weight-bold">Land Insights</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />

                <div className="collapse navbar-collapse w-auto h-auto" style={{ paddingBottom: "50px" }}>
                    <ul className="navbar-nav">
                        <NavItem />
                    </ul>
                </div>
                <div className="sidenav-footer mx-3 mt-3 pt-3"></div>
            </aside>
        );
    }
}
