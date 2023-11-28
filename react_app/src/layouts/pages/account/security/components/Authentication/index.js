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
import SoftButton from "components/SoftButton";

function Authentication() {
  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="centers" pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Two factor authentication
        </SoftTypography>
        <SoftButton variant="gradient" color="dark" size="small">
          enable
        </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox mt={6} mb={3} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Two-factor authentication adds an additional layer of security to your account by
            requiring more than just a password to log in.
          </SoftTypography>
        </SoftBox>
        <SoftBox
          bgColor="dark"
          borderRadius="lg"
          shadow="lg"
          p={2}
          variant="gradient"
          lineHeight={1}
        >
          <SoftTypography variant="h6" fontWeight="medium" color="white">
            Questions about security?
          </SoftTypography>
          <SoftBox mb={3}>
            <SoftTypography variant="button" fontWeight="regular" color="white">
              Have a question, concern, or comment about security? Please contact us.
            </SoftTypography>
          </SoftBox>
          <SoftButton variant="gradient" color="light">
            contact us
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Authentication;
