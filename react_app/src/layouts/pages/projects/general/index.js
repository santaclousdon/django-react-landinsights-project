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

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import AnimatedStatisticsCard from "examples/Cards/StatisticsCards/AnimatedStatisticsCard";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import AnnouncementCard from "examples/Cards/AnnouncementCard";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import ProgressDoughnutChart from "examples/Charts/DoughnutCharts/ProgressDoughnutChart";

// General page components
import TodoList from "layouts/pages/projects/general/components/TodoList";

// Data
import progressLineChartData from "layouts/pages/projects/general/data/progressLineChartData";
import progressDoughnutChartData from "layouts/pages/projects/general/data/progressDoughnutChartData";

// Images
import team3 from "assets/images/team-3.jpg";

function General() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <AnimatedStatisticsCard
                  title="earnings"
                  count="$15,800"
                  percentage={{
                    color: "dark",
                    label: "+15% since last week",
                  }}
                  action={{
                    type: "internal",
                    route: "/pages/projects/general",
                    label: "view more",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <SoftBox mb={3}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "today's money" }}
                    count="$53,000"
                    icon={{ color: "dark", component: "local_atm" }}
                    direction="left"
                  />
                </SoftBox>
                <MiniStatisticsCard
                  title={{ fontWeight: "medium", text: "sessions" }}
                  count="9,600"
                  percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "dark", component: "emoji_events" }}
                  direction="left"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <SoftBox mb={3}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "today's users" }}
                    count="2,300"
                    percentage={{ color: "success", text: "+3%" }}
                    icon={{ color: "dark", component: "public" }}
                    direction="left"
                  />
                </SoftBox>
                <MiniStatisticsCard
                  title={{ fontWeight: "medium", text: "Sign-Ups" }}
                  count="348"
                  percentage={{ color: "success", text: "+12%" }}
                  icon={{ color: "dark", component: "storefront" }}
                  direction="left"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <SoftBox my={3}>
                <TodoList />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AnnouncementCard
                  by={{ image: team3, name: "lucas prila", date: "2h ago" }}
                  badge={{ color: "info", label: "recommendation" }}
                  title="I need a Ruby developer for my new website."
                  description="The website was initially built in PHP, I need a professional ruby programmer to shift it."
                  value={{ type: "$", amount: "3,000", method: "month" }}
                  action={{ type: "internal", route: "/pages/projects/general", label: "apply" }}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressLineChart
                  icon="date_range"
                  title="Tasks"
                  count={480}
                  progress={60}
                  chart={progressLineChartData}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressDoughnutChart
                  icon="workspace_premium"
                  title="projects"
                  count={115}
                  chart={progressDoughnutChartData}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default General;
