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

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Doughnut } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import ReportsDoughnutChartItem from "examples/Charts/DoughnutCharts/ReportsDoughnutChart/ReportsDoughnutChartItem";

// ReportsDoughnutChart configurations
import configs from "examples/Charts/DoughnutCharts/ReportsDoughnutChart/configs";

function ReportsDoughnutChart({ title, count, chart, tooltip }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderItems =
    chart.labels && chart.datasets
      ? chart.labels.map((label, key) => (
          <ReportsDoughnutChartItem
            color={chart.datasets.backgroundColors ? chart.datasets.backgroundColors[key] : "dark"}
            title={label}
            key={label}
            percentage={`${chart.datasets.data ? chart.datasets.data[key] : 0}%`}
            hasBorder={key !== chart.labels.length - 1}
          />
        ))
      : null;

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6">{title}</SoftTypography>
        <Tooltip title={tooltip} placement="bottom" arrow>
          <SoftButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </SoftButton>
        </Tooltip>
      </SoftBox>
      <SoftBox p={2}>
        {useMemo(
          () => (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <SoftBox height="100%" textAlign="center" position="relative">
                  <SoftBox height={{ xs: "65%", sm: "100%" }} mt={{ xs: 6, sm: 0 }}>
                    <Doughnut data={data} options={options} />
                  </SoftBox>
                  <SoftBox
                    mt={{ xs: 0, sm: -15.25 }}
                    position="relative"
                    top={{ xs: "-8.25rem", sm: 0 }}
                  >
                    <SoftTypography variant="h4" fontWeight="medium">
                      {count.number}
                    </SoftTypography>
                    <SoftTypography
                      variant="button"
                      color="text"
                      textTransform="uppercase"
                      fontWeight="medium"
                    >
                      {count.text}
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              </Grid>
              <Grid item xs={12} sm={7}>
                {renderItems}
              </Grid>
            </Grid>
          ),
          [chart]
        )}
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of ReportsDoughnutChart
ReportsDoughnutChart.defaultProps = {
  tooltip: "",
};

// Typechecking props for the ReportsDoughnutChart
ReportsDoughnutChart.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.shape({
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired,
  }).isRequired,
  chart: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
    ).isRequired,
  }).isRequired,
  tooltip: PropTypes.string,
};

export default ReportsDoughnutChart;
