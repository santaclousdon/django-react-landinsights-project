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

function PasswordRequirements() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <SoftBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1.25}>
        <SoftTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </SoftTypography>
      </SoftBox>
    );
  });

  return (
    <Card id="change-password">
      <SoftBox pt={2} px={2} lineHeight={1}>
        <SoftTypography variant="h6" fontWeight="medium">
          Password requirements
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Please follow this guide for a strong password:
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
          {renderPasswordRequirements}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default PasswordRequirements;
