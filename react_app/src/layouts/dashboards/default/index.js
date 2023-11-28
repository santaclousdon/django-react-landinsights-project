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

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Globe from "examples/Globe";

// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
import breakpoints from "assets/theme/base/breakpoints";

// Data
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";

function Default() {
  const { values } = breakpoints;
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <SoftBox mb={3} p={1}>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                general statistics
              </SoftTypography>
            </SoftBox>

            <Grid container>
              <Grid item xs={12}>
                <Globe
                  display={{ xs: "none", md: "block" }}
                  position="absolute"
                  top="10%"
                  right={0}
                  mt={{ xs: -12, lg: 1 }}
                  mr={{ xs: 0, lg: 10 }}
                  canvasStyle={{ marginTop: "3rem" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <SoftBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "today's money", fontWeight: "bold" }}
                    count="$53,000"
                    percentage={{ color: "success", text: "+55%" }}
                    icon={{ color: "info", component: "paid" }}
                  />
                </SoftBox>
                <MiniStatisticsCard
                  title={{ text: "today's users", fontWeight: "bold" }}
                  count="2,300"
                  percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "info", component: "public" }}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <SoftBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "new clients", fontWeight: "bold" }}
                    count="+3,462"
                    percentage={{ color: "error", text: "-2%" }}
                    icon={{ color: "info", component: "emoji_events" }}
                  />
                </SoftBox>
                <SoftBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "sales", fontWeight: "bold" }}
                    count="$103,430"
                    percentage={{ color: "success", text: "+5%" }}
                    icon={{
                      color: "info",
                      component: "shopping_cart",
                    }}
                  />
                </SoftBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={7}>
            <Grid item xs={12} lg={10}>
              <SoftBox mb={3} position="relative">
                <SalesTable title="Sales by Country" rows={salesTableData} />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
