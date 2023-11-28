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

function DeleteAccount() {
  return (
    <Card id="delete-account">
      <SoftBox p={3} lineHeight={1}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5">Delete Account</SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Once you delete your account, there is no going back. Please be certain.
        </SoftTypography>
      </SoftBox>
      <SoftBox
        pb={3}
        px={3}
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <SoftBox display="flex" alignItems="center" mb={{ xs: 3, sm: 0 }}>
          <Switch />
          <SoftBox ml={2} lineHeight={0}>
            <SoftTypography display="block" variant="button" fontWeight="medium">
              Confirm
            </SoftTypography>
            <SoftTypography variant="caption" color="text">
              I want to delete my account.
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <SoftButton variant="outlined" color="secondary">
            deactivate
          </SoftButton>
          <SoftBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <SoftButton variant="gradient" color="error" sx={{ height: "100%" }}>
              delete account
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default DeleteAccount;
