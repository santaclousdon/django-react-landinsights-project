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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
const orderImage =
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80";

function OrderInfo() {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <SoftBox display="flex" alignItems="center">
          <SoftBox mr={2}>
            <SoftAvatar variant="rounded" size="xxl" src={orderImage} alt="Gold Glasses" />
          </SoftBox>
          <SoftBox lineHeight={1}>
            <SoftTypography variant="h6" fontWeight="medium">
              Gold Glasses
            </SoftTypography>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Order was delivered 2 days ago.
              </SoftTypography>
            </SoftBox>
            <SoftBadge
              variant="gradient"
              color="success"
              size="xs"
              badgeContent="delivered"
              container
            />
          </SoftBox>
        </SoftBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
        <SoftButton variant="gradient" color="info">
          contact us
        </SoftButton>
        <SoftBox mt={0.5}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Do you like the product? Leave us a review{" "}
            <SoftTypography component="a" href="#" variant="button" fontWeight="regular">
              here
            </SoftTypography>
            .
          </SoftTypography>
        </SoftBox>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
