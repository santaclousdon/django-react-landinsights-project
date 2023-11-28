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

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Sweet Alerts page components
import Basic from "layouts/pages/sweet-alerts/components/Basic";
import Success from "layouts/pages/sweet-alerts/components/Success";
import CustomHtml from "layouts/pages/sweet-alerts/components/CustomHtml";
import GithubAvatarRequest from "layouts/pages/sweet-alerts/components/GithubAvatarRequest";
import TitleWithText from "layouts/pages/sweet-alerts/components/TitleWithText";
import AutoClose from "layouts/pages/sweet-alerts/components/AutoClose";
import WithAttachedFunction from "layouts/pages/sweet-alerts/components/WithAttachedFunction";
import WithSuccessAttachedFunction from "layouts/pages/sweet-alerts/components/WithSuccessAttachedFunction";
import RtlLanguarge from "layouts/pages/sweet-alerts/components/RtlLanguarge";

function SweetAlerts() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={3} mb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <SoftBox mt={6} textAlign="center">
              <SoftTypography variant="h2" fontWeight="bold">
                Sweet Alert
              </SoftTypography>
              <SoftBox mt={1} mb={2}>
                <SoftTypography variant="body2" color="text">
                  A beautiful plugin, that replace the classic alert, Handcrafted by our friend{" "}
                  <SoftTypography
                    component="a"
                    href="https://twitter.com/t4t5"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                  >
                    Tristan Edwards.
                  </SoftTypography>{" "}
                  Please check out the{" "}
                  <SoftTypography
                    component="a"
                    href="https://sweetalert2.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                  >
                    full documentation.
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox mt={3}>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8} container spacing={3}>
              <Grid item xs={12} md={4}>
                <Basic />
              </Grid>
              <Grid item xs={12} md={4}>
                <Success />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomHtml />
              </Grid>
              <Grid item xs={12} md={4}>
                <GithubAvatarRequest />
              </Grid>
              <Grid item xs={12} md={4}>
                <TitleWithText />
              </Grid>
              <Grid item xs={12} md={4}>
                <AutoClose />
              </Grid>
              <Grid item xs={12} md={4}>
                <WithAttachedFunction />
              </Grid>
              <Grid item xs={12} md={4}>
                <WithSuccessAttachedFunction />
              </Grid>
              <Grid item xs={12} md={4}>
                <RtlLanguarge />
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SweetAlerts;
