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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAlert from "components/SoftAlert";
import SoftButton from "components/SoftButton";
import SoftSnackbar from "components/SoftSnackbar";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <SoftTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <SoftTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </SoftTypography>
      . Give it a click if you like.
    </SoftTypography>
  );

  const renderSuccessSB = (
    <SoftSnackbar
      color="success"
      icon="check"
      title="Soft UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <SoftSnackbar
      icon="notifications"
      title="Soft UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <SoftSnackbar
      color="warning"
      icon="star"
      title="Soft UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <SoftSnackbar
      color="error"
      icon="warning"
      title="Soft UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <SoftBox p={2}>
                <SoftTypography variant="h5">Alerts</SoftTypography>
              </SoftBox>
              <SoftBox pt={2} px={2}>
                <SoftAlert color="primary" dismissible>
                  {alertContent("primary")}
                </SoftAlert>
                <SoftAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </SoftAlert>
                <SoftAlert color="success" dismissible>
                  {alertContent("success")}
                </SoftAlert>
                <SoftAlert color="error" dismissible>
                  {alertContent("error")}
                </SoftAlert>
                <SoftAlert color="warning" dismissible>
                  {alertContent("warning")}
                </SoftAlert>
                <SoftAlert color="info" dismissible>
                  {alertContent("info")}
                </SoftAlert>
                <SoftAlert color="light" dismissible>
                  {alertContent("light")}
                </SoftAlert>
                <SoftAlert color="dark" dismissible>
                  {alertContent("dark")}
                </SoftAlert>
              </SoftBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <SoftBox p={2} lineHeight={0}>
                <SoftTypography variant="h5">Notifications</SoftTypography>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </SoftTypography>
              </SoftBox>
              <SoftBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <SoftButton
                      variant="gradient"
                      color="success"
                      onClick={openSuccessSB}
                      fullWidth
                    >
                      success notification
                    </SoftButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <SoftButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </SoftButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <SoftButton
                      variant="gradient"
                      color="warning"
                      onClick={openWarningSB}
                      fullWidth
                    >
                      warning notification
                    </SoftButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <SoftButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </SoftButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
