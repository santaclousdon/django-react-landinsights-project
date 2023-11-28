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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-circular-slider-svg components
import CircularSlider from "react-circular-slider-svg";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";

// Custom styles for TemperatureSlider
import circularSlider from "layouts/dashboards/smart-home/components/TemperatureSlider/styles";

function TemperatureSlider({ title, color, current, label, start, end, ...sliderProps }) {
  const { circleSliderColors } = colors;

  return (
    <Card sx={{ height: "99.5%" }}>
      <SoftBox p={2} position="relative" height="100%">
        <SoftBox mb={1}>
          <SoftTypography variant="h6" fontWeight="medium">
            {title}
          </SoftTypography>
        </SoftBox>
        <SoftBox height="100%" textAlign="center" sx={(theme) => circularSlider(theme, { color })}>
          <CircularSlider
            {...sliderProps}
            arcBackgroundColor={circleSliderColors.background}
            arcColor={colors[color].main}
            startAngle={45}
            endAngle={315}
            handleSize={6}
            size={220}
          />
          <SoftBox mt={12}>
            <SoftTypography variant="h4" fontWeight="medium">
              {current}
            </SoftTypography>
          </SoftBox>
          <SoftBox
            display="flex"
            justifyContent="space-around"
            alignItems="baseline"
            width="12.5rem"
            mx="auto"
            mt={6}
          >
            <SoftTypography variant="caption" color="text">
              {start}
            </SoftTypography>
            <SoftTypography variant="body2" color="text" textTransform="capitalize">
              {label}
            </SoftTypography>
            <SoftTypography variant="caption" color="text">
              {end}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of TemperatureSlider
TemperatureSlider.defaultProps = {
  color: "info",
};

// Typechecking props for the TemperatureSlider
TemperatureSlider.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  current: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  start: PropTypes.node.isRequired,
  end: PropTypes.node.isRequired,
};

export default TemperatureSlider;
