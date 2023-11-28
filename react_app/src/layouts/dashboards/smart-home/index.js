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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import WeatherCard from "examples/Cards/WeatherCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import ReportsDoughnutChart from "examples/Charts/DoughnutCharts/ReportsDoughnutChart";
import ThinBarChart from "examples/Charts/BarCharts/ThinBarChart";
import ControllerCard from "examples/Cards/ControllerCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// SmartHome dashboard components
import Cameras from "layouts/dashboards/smart-home/components/Cameras";
import TemperatureSlider from "layouts/dashboards/smart-home/components/TemperatureSlider";

// Data
import reportsDoughnutChartData from "layouts/dashboards/smart-home/data/reportsDoughnutChartData";
import thinBarChartData from "layouts/dashboards/smart-home/data/thinBarChartData";
import controllerCardIcons from "layouts/dashboards/smart-home/data/controllerCardIcons";

// Images
import iconSunCloud from "assets/images/small-logos/icon-sun-cloud.png";

function SmartHome() {
  const [temperature, setTemperature] = useState(21);
  const {
    humidityIconLight,
    temperatureIconLight,
    airConditionerIconLight,
    lightsIconLight,
    wifiIconLight,
    humidityIconDark,
    airConditionerIconDark,
    lightsIconDark,
    wifiIconDark,
  } = controllerCardIcons;

  // Controller cards states
  const [humidityState, setHumidityState] = useState(false);
  const [temperatureState, setTemperatureState] = useState(true);
  const [airConditionerState, setAirConditionerState] = useState(false);
  const [lightsStata, setLightsStata] = useState(false);
  const [wifiState, setWifiState] = useState(true);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={7}>
              <Cameras />
            </Grid>
            <Grid item xs={12} xl={5}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <WeatherCard
                    title="weather today"
                    weather={{ location: "San Francisco", degree: 29 }}
                    icon={{ component: iconSunCloud, text: "cloudy" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={21}
                    suffix={<>&deg;C</>}
                    title="living room"
                    description="temperature"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={44}
                    suffix="%"
                    title="outside"
                    description="humidity"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={87}
                    suffix="m³"
                    title="water"
                    description="consumption"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={417}
                    suffix="GB"
                    title="internet"
                    description="all devices"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <ReportsDoughnutChart
                title="Consumption by room"
                count={{ number: 471.3, text: "whatts" }}
                chart={reportsDoughnutChartData}
                tooltip="See the consumption per room"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ThinBarChart title="Consumption per day" chart={thinBarChartData} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TemperatureSlider
                handle1={{
                  value: temperature,
                  onChange: (v) => setTemperature(Math.round(v)),
                }}
                title="Device limit"
                current={
                  <>
                    {temperature}
                    <SoftTypography component="span" variant="h4" color="text">
                      &deg;C
                    </SoftTypography>
                  </>
                }
                label="temperature"
                start={<>16&deg;C</>}
                end={<>38&deg;C</>}
                minValue={16}
                maxValue={38}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <SoftBox my={6} width="100%">
        <Divider />
      </SoftBox>
      <SoftBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={humidityState}
              icon={humidityState ? humidityIconLight : humidityIconDark}
              title="humidity"
              description="Inactive since: 2 days"
              onChange={() => setHumidityState(!humidityState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={temperatureState}
              icon={temperatureIconLight}
              title="temperature"
              description="Active"
              onChange={() => setTemperatureState(!temperatureState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={airConditionerState}
              icon={airConditionerState ? airConditionerIconLight : airConditionerIconDark}
              title="air conditioner"
              description="Inactive since: 1 hour"
              onChange={() => setAirConditionerState(!airConditionerState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={lightsStata}
              icon={lightsStata ? lightsIconLight : lightsIconDark}
              title="lights"
              description="Inactive since: 27 min"
              onChange={() => setLightsStata(!lightsStata)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={wifiState}
              icon={wifiState ? wifiIconLight : wifiIconDark}
              title="wi-fi"
              description="active"
              onChange={() => setWifiState(!wifiState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <PlaceholderCard title={{ variant: "h5", text: "New device" }} />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SmartHome;
