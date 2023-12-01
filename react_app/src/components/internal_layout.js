import React, { Component } from "react";
import { Outlet } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

import { Navbar, Footer } from "library";

class Wrapper extends Component {
    render() {
        let title = this.props.title;
        let description = this.props.description;
        let image = this.props.image;

        return (
            <div>
                <div
                    style={{
                        width: "calc(100% - 2rem)",
                        minHeight: "50vh",
                        borderRadius: "0.75rem",
                        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            image &&
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.6),
                                rgba(gradients.dark.state, 0.6)
                            )}, url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
                        <Grid item xs={10} lg={4}>
                            <div>
                                <h1 style={{ color: "white", fontWeight: "bold" }}>{title}</h1>
                            </div>

                            <div>
                                <div>{description}</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div
                    style={{
                        width: "calc(100% - 2rem)",
                    }}
                >
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
                            {/* An <Outlet> renders whatever child route is currently active,
                                so you can think about this <Outlet> as a placeholder for
                                the child routes we defined above. */}
                            <Outlet />
                        </Grid>
                    </Grid>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Wrapper;
