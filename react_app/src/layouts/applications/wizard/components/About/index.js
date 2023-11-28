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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import team2 from "assets/images/team-2.jpg";

function About() {
  return (
    <SoftBox>
      <SoftBox width="80%" textAlign="center" mx="auto" mb={4}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5" fontWeight="regular">
            Let&apos;s start with the basic information
          </SoftTypography>
        </SoftBox>
        <SoftTypography variant="body2" fontWeight="regular" color="text">
          Let us know your name and email address. Use an address you don&apos;t mind other users
          contacting you at
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <SoftBox position="relative" height="max-content" mx="auto">
              <SoftAvatar src={team2} alt="profile picture" size="xxl" variant="rounded" />
              <SoftBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
                <SoftButton variant="gradient" color="light" size="small" iconOnly>
                  <Icon>edit</Icon>
                </SoftButton>
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={8}>
            <SoftBox mb={2}>
              <FormField type="text" label="first name" placeholder="Eg. Michael" />
            </SoftBox>
            <SoftBox mb={2}>
              <FormField type="text" label="last name" placeholder="Eg. Tomson" />
            </SoftBox>
            <SoftBox>
              <FormField type="text" label="email address" placeholder="Eg. soft@dashboard.com" />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default About;
