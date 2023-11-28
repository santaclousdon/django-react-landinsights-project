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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

function ComplexReportsDoughnutChartItem({ image, title, percentage, hasBorder }) {
  const { borderWidth } = borders;
  const { light } = colors;

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderBottom: hasBorder ? `${borderWidth[1]} solid ${light.main}` : "none" }}
    >
      <Grid item xs={10}>
        <SoftBox display="flex" py={1.5} px={2}>
          {image && (
            <SoftBox mr={1}>
              <SoftAvatar src={image} size="sm" alt="title" />
            </SoftBox>
          )}
          <SoftBox display="flex" flexDirection="column" justifyContent="center">
            <SoftTypography
              component="div"
              variant="button"
              textTransform="capitalize"
              fontWeight="medium"
            >
              {title}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Grid>
      <Grid item xs={2}>
        <SoftBox py={0.8} px={1} textAlign="center">
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            {percentage}
          </SoftTypography>
        </SoftBox>
      </Grid>
    </Grid>
  );
}

// Setting default values for the props of ComplexReportsDoughnutChartItem
ComplexReportsDoughnutChartItem.defaultProps = {
  image: "",
  hasBorder: false,
};

// Typechecking props for the ComplexReportsDoughnutChartItem
ComplexReportsDoughnutChartItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

export default ComplexReportsDoughnutChartItem;
