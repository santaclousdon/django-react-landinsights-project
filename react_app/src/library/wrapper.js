/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Copied from ./layouts/authentication/components/BasicLayout

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

import Navbar from "components/navbar";
import Footer from "components/footer";

class Wrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar
                    routes={pageRoutes}
                    action={{
                        type: "external",
                        route: "/login",
                        label: "login",
                    }}
                    transparent
                    light
                />

                <div
                    style={{
                        width: "calc(100% - 2rem)",
                        minHeight: "50vh",
                        borderRadius: "0.75rem",
                        backgroundImage: ({
                            functions: { linearGradient, rgba },
                            palette: { gradients },
                        }) =>
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
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        sx={{ textAlign: "center" }}
                    >
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
                            {children}
                        </Grid>
                    </Grid>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Wrapper;
