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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DefaultNavbar from "custom_components/navbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "custom_components/footer";

// Soft UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";

function BasicWrapper({ title, description, image, children }) {
    return (
        <PageLayout>
            <DefaultNavbar
                routes={pageRoutes}
                action={{
                    type: "external",
                    route: "/login",
                    label: "login",
                }}
                transparent
                light
            />
            <SoftBox
                width="calc(100% - 2rem)"
                minHeight="50vh"
                borderRadius="lg"
                mx={2}
                my={2}
                pt={6}
                pb={28}
                sx={{
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
                <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
                    <Grid item xs={10} lg={4}>
                        <SoftBox mt={6} mb={1}>
                            <SoftTypography variant="h1" color="white" fontWeight="bold">
                                {title}
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={2}>
                            <SoftTypography variant="body2" color="white" fontWeight="regular">
                                {description}
                            </SoftTypography>
                        </SoftBox>
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
                        {children}
                    </Grid>
                </Grid>
            </SoftBox>
            <Footer />
        </PageLayout>
    );
}

// Setting default values for the props of BasicWrapper
BasicWrapper.defaultProps = {
    title: "",
    description: "",
};

// Typechecking props for the BasicWrapper
BasicWrapper.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default BasicWrapper;
