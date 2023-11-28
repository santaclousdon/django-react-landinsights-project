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

// react-router-dom components
import { Link } from "react-router-dom";

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
import ComplexReportsDoughnutChartItem from "examples/Charts/DoughnutCharts/ComplexReportsDoughnutChart/ComplexReportsDoughnutChartItem";

// ComplexReportsDoughnutChart configurations
import configs from "examples/Charts/DoughnutCharts/ComplexReportsDoughnutChart/configs";

function ComplexReportsDoughnutChart({ title, chart, tooltip, action }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderItems = chart.labels
    ? chart.labels.map((label, key) => (
        <ComplexReportsDoughnutChartItem
          image={chart.images && chart.images[key]}
          title={label}
          key={label}
          percentage={`${chart.datasets && chart.datasets.data ? chart.datasets.data[key] : 0}%`}
          hasBorder={key !== chart.labels.length - 1}
        />
      ))
    : null;

  const renderButton = () => {
    let template;

    if (action) {
      template =
        action.type === "internal" ? (
          <SoftBox mt={3} mb={2}>
            <SoftButton
              component={Link}
              to={action.route}
              variant="gradient"
              color={action.color}
              size="small"
            >
              {action.label}
            </SoftButton>
          </SoftBox>
        ) : (
          <SoftBox mt={3} mb={2}>
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color={action.color}
              size="small"
            >
              {action.label}
            </SoftButton>
          </SoftBox>
        );
    }

    return template;
  };

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6">{title}</SoftTypography>
        <Tooltip title={tooltip} placement="right">
          <SoftButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </SoftButton>
        </Tooltip>
      </SoftBox>
      <SoftBox position="relative" p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5} sx={{ textAlign: "center" }}>
            <SoftBox height="100%" display="flex" flexDirection="column">
              <SoftBox height="100%" mt={5} mx={1}>
                {useMemo(
                  () => (
                    <Doughnut data={data} options={options} />
                  ),
                  [chart]
                )}
              </SoftBox>
              {renderButton()}
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={7}>
            {useMemo(() => renderItems, [chart])}
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of ComplexReportsDoughnutChart
ComplexReportsDoughnutChart.defaultProps = {
  tooltip: "",
  action: false,
};

// Typechecking props for the ComplexReportsDoughnutChart
ComplexReportsDoughnutChart.propTypes = {
  title: PropTypes.string.isRequired,
  chart: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
    ).isRequired,
  }).isRequired,
  tooltip: PropTypes.string,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
    }),
  ]),
};

export default ComplexReportsDoughnutChart;
