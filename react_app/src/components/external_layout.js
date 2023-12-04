import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "library";

export default class ExternalLayout extends Component {
    render() {
        let title = window.secret_react_vars.page_title;
        let description = window.secret_react_vars.page_description;
        let image = window.secret_react_vars.page_image;

        return (
            <div>
                <Navbar
                //routes={routes}
                />
                <div
                    className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
                    style={{
                        width: "calc(100% - 2rem)",
                        minHeight: "50vh",
                        borderRadius: "0.75rem",
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <span class="mask bg-gradient-dark opacity-6"></span>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5 text-center mx-auto">
                                <h1 class="text-white mb-2 mt-5">{title}</h1>
                                <p class="text-lead text-white">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
                        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
                            {/* An <Outlet> renders whatever child route is currently active,
                                so you can think about this <Outlet> as a placeholder for
                                the child routes we defined above. */}
                            <Outlet />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
