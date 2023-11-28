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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Security page components
import FormField from "layouts/pages/account/components/FormField";

function ChangePassword() {
  return (
    <Card id="change-password">
      <SoftBox pt={2} px={2} lineHeight={1}>
        <SoftTypography variant="h6" fontWeight="medium">
          Change Password
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          We will send you an email with the verification code.
        </SoftTypography>
      </SoftBox>
      <SoftBox component="form" p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              label="current password"
              placeholder="Current Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="new password"
              placeholder="New Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="confirm new password"
              placeholder="Confirm Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
        </Grid>
        <SoftBox mt={2}>
          <SoftButton variant="gradient" color="dark" fullWidth>
            update password
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default ChangePassword;
