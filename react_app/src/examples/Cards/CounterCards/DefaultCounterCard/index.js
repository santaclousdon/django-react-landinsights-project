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

// react-countup components
import CountUp from "react-countup";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function DefaultCounterCard({ color, count, title, description, prefix, suffix }) {
  return (
    <Card>
      <SoftBox p={3} textAlign="center" lineHeight={1.25}>
        <SoftTypography variant="h1" color={color} fontWeight="bold" textGradient>
          {prefix && (
            <SoftTypography component="span" variant="h5" fontWeight="bold">
              {prefix}
            </SoftTypography>
          )}
          <SoftBox display="inline-block" mx={0.5}>
            <CountUp end={count} duration={1} separator="," />
          </SoftBox>
          {suffix && (
            <SoftTypography component="span" variant="h5" fontWeight="bold">
              {suffix}
            </SoftTypography>
          )}
        </SoftTypography>
        <SoftTypography variant="h6" fontWeight="bold" textTransform="capitalize">
          {title}
        </SoftTypography>
        {description && (
          <SoftTypography
            variant="button"
            fontWeight="regular"
            opacity={0.8}
            textTransform="capitalize"
          >
            {description}
          </SoftTypography>
        )}
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  prefix: "",
  suffix: "",
  description: "",
};

// Typechecking props for the BlogCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default DefaultCounterCard;
