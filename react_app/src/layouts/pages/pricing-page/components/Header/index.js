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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Soft UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";

// Images
import waves from "assets/images/shapes/waves-white.svg";

function Header({ tabValue, tabHandler }) {
  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-pro-react",
          label: "buy now",
          color: "dark",
        }}
        transparent
        light
      />
      <SoftBox
        position="relative"
        height="50vh"
        borderRadius="xl"
        overflow="hidden"
        bgColor="info"
        variant="gradient"
        m={2}
        pt={12}
        pb={20}
      >
        <SoftBox
          component="img"
          src={waves}
          alt="waves"
          width="105rem"
          position="absolute"
          top={0}
        />
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={5}>
            <SoftBox mb={1}>
              <SoftTypography variant="h3" color="white" fontWeight="bold">
                See our pricing
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="body2" color="white" fontWeight="regular">
                You have Free Unlimited Updates and Premium Support on each package.
              </SoftTypography>
            </SoftBox>
            <Grid container item xs={12} sm={10} md={8} lg={7} sx={{ mx: "auto" }}>
              <SoftBox width="100%" mt={6}>
                <AppBar position="static">
                  <Tabs value={tabValue} onChange={tabHandler}>
                    <Tab
                      id="monthly"
                      label={
                        <SoftBox py={0.5} px={2}>
                          Monthly
                        </SoftBox>
                      }
                    />
                    <Tab
                      id="annual"
                      label={
                        <SoftBox py={0.5} px={2}>
                          Annual
                        </SoftBox>
                      }
                    />
                  </Tabs>
                </AppBar>
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  tabHandler: PropTypes.func.isRequired,
};

export default Header;
