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

// Soft UI Dashboard PRO React example components
import DefaultItem from "examples/Items/DefaultItem";

function NextEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Next events
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <DefaultItem icon="paid" title="Cyber Week" description="27 March 2020, at 12:30 PM" />
        <SoftBox mt={3.5}>
          <DefaultItem
            color="primary"
            icon="notifications"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </SoftBox>
        <SoftBox mt={3.5}>
          <DefaultItem
            color="success"
            icon="menu_book"
            title="Book Deposit Hall"
            description="25 March 2021, at 9:30 AM"
          />
        </SoftBox>
        <SoftBox mt={3.5}>
          <DefaultItem
            color="warning"
            icon="local_shipping"
            title="Shipment Deal UK"
            description="25 March 2021, at 2:00 PM"
          />
        </SoftBox>
        <SoftBox mt={3.5}>
          <DefaultItem
            color="error"
            icon="palette"
            title="Verify Dashboard Color Palette"
            description="26 March 2021, at 9:00 AM"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default NextEvents;
