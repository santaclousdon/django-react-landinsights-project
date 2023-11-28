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
import SoftBadge from "components/SoftBadge";

function Steps() {
  return (
    <Card>
      <SoftBox p={3}>
        <SoftTypography variant="body2" color="text" fontWeight="regular">
          خطوات
        </SoftTypography>
        <SoftBox mt={2} mb={1} lineHeight={0}>
          <SoftTypography variant="h3" fontWeight="bold">
            11.4ك
          </SoftTypography>
        </SoftBox>
        <SoftBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </SoftBox>
    </Card>
  );
}

export default Steps;
