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
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftBadgeDot from "components/SoftBadgeDot";
import PieChart from "examples/Charts/PieChart";

// Data
import channelChartData from "layouts/ecommerce/overview/components/ChannelsChart/data";

function ChannelsChart() {
  return (
    <Card sx={{ overflow: "visible" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6">Channels</SoftTypography>
        <Tooltip title="See traffic channels" placement="bottom" arrow>
          <SoftButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </SoftButton>
        </Tooltip>
      </SoftBox>
      <SoftBox p={2} mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="100%" />
          </Grid>
          <Grid item xs={5}>
            <SoftBox px={1}>
              <SoftBox mb={0.5}>
                <SoftBadgeDot color="info" size="sm" badgeContent="Facebook" />
              </SoftBox>
              <SoftBox mb={0.5}>
                <SoftBadgeDot color="primary" size="sm" badgeContent="Direct" />
              </SoftBox>
              <SoftBox mb={0.5}>
                <SoftBadgeDot color="dark" size="sm" badgeContent="Organic" />
              </SoftBox>
              <SoftBox mb={0.5}>
                <SoftBadgeDot color="secondary" size="sm" badgeContent="Referral" />
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        mt="auto"
      >
        <SoftBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            More than <strong>1,200,000</strong> developers used Creative Tim&apos;s products and
            over <strong>700,000</strong> projects were created.
          </SoftTypography>
        </SoftBox>
        <SoftBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
          <SoftButton color="light">read more</SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default ChannelsChart;
