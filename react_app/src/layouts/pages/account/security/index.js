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
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";

// Security page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import FormField from "layouts/pages/account/components/FormField";
import SecuritySettings from "layouts/pages/account/security/components/SecuritySettings";
import Authentication from "layouts/pages/account/security/components/Authentication";
import ChangePassword from "layouts/pages/account/security/components/ChangePassword";
import PasswordRequirements from "layouts/pages/account/security/components/PasswordRequirements";

function Security() {
  return (
    <BaseLayout stickyNavbar>
      <SoftBox mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  security question
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                placeholder="Question 1"
                options={[
                  { value: "question 1", label: "Question 1" },
                  { value: "question 2", label: "Question 2" },
                  { value: "question 3", label: "Question 3" },
                  { value: "your question", label: "Your Question", isDisabled: true },
                ]}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="your answer" placeholder="Enter your answer" />
          </Grid>
        </Grid>
        <Divider />
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SecuritySettings />
            </Grid>
            <Grid item xs={12} md={6}>
              <Authentication />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ChangePassword />
            </Grid>
            <Grid item xs={12} md={6}>
              <PasswordRequirements />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </BaseLayout>
  );
}

export default Security;
