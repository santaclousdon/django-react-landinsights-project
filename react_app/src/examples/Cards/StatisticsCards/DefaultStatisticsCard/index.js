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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function DefaultStatisticsCard({ title, count, percentage, dropdown }) {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container>
          <Grid item xs={7}>
            <SoftBox mb={0.5} lineHeight={1}>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {title}
              </SoftTypography>
            </SoftBox>
            <SoftBox lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="bold">
                {count}
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="bold" color={percentage.color}>
                {percentage.value}&nbsp;
                <SoftTypography variant="button" fontWeight="regular" color="secondary">
                  {percentage.label}
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={5}>
            {dropdown && (
              <SoftBox width="100%" textAlign="right" lineHeight={1}>
                <SoftTypography
                  variant="caption"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                  onClick={dropdown.action}
                >
                  {dropdown.value}
                </SoftTypography>
                {dropdown.menu}
              </SoftBox>
            )}
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of DefaultStatisticsCard
DefaultStatisticsCard.defaultProps = {
  percentage: {
    color: "success",
    value: "",
    label: "",
  },
  dropdown: false,
};

// Typechecking props for the DefaultStatisticsCard
DefaultStatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
      value: PropTypes.string,
    }),
  ]),
};

export default DefaultStatisticsCard;
