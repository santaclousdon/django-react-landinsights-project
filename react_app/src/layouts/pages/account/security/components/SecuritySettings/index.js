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
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function SecuritySettings() {
  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Security Settings
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Notify me via email when logging in
          </SoftTypography>
          <SoftBox ml={2} mr={1}>
            <Switch defaultChecked />
          </SoftBox>
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Send SMS confirmation for all online payments
          </SoftTypography>
          <SoftBox ml={2} mr={1}>
            <Switch />
          </SoftBox>
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Check which devices accessed your account
          </SoftTypography>
          <SoftBox ml={2} mr={1}>
            <Switch defaultChecked />
          </SoftBox>
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Find My Device, make sure your device can be found if it gets lost
          </SoftTypography>
          <SoftBox ml={2} mr={1}>
            <Switch />
          </SoftBox>
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Lock your device with a PIN, pattern, or password
          </SoftTypography>
          <SoftBox ml={2} mr={1}>
            <Switch />
          </SoftBox>
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Manage what apps have access to app-usage data on your device
          </SoftTypography>
          <SoftBox ml={2} mr={1}>
            <Switch defaultChecked />
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" justifyContent="flex-end" mt={6}>
          <SoftBox mr={1}>
            <SoftButton variant="outlined" color="info" size="small">
              cancel
            </SoftButton>
          </SoftBox>
          <SoftButton variant="gradient" color="info" size="small">
            save changes
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default SecuritySettings;
