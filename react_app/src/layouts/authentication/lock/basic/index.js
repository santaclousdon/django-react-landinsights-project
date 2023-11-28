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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import curved8 from "assets/images/curved-images/curved8.jpg";
import team4 from "assets/images/team-4.jpg";

function Basic() {
  return (
    <BasicLayout image={curved8}>
      <Card>
        <SoftBox py={4} px={3} textAlign="center">
          <SoftBox display="flex" justifyContent="center" mb={3}>
            <SoftAvatar src={team4} alt="profile-picture" size="xxl" variant="rounded" />
          </SoftBox>
          <SoftTypography variant="h4" fontWeight="bold">
            Mike Priesler
          </SoftTypography>
          <SoftBox mb={3}>
            <SoftTypography variant="body2" color="text">
              Enter password to unlock your account.
            </SoftTypography>
          </SoftBox>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput type="password" placeholder="Password" />
            </SoftBox>
            <SoftBox mt={4}>
              <SoftButton variant="gradient" color="dark" size="large">
                unlock
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
