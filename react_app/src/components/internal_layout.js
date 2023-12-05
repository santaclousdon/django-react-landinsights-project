import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar, Navbar } from "components";

export default class InternalLayout extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                    <Navbar />
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
