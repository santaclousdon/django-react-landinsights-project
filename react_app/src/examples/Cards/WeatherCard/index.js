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

function WeatherCard({ color, title, weather, icon }) {
  return (
    <Card>
      <SoftBox
        bgColor={color}
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        variant="gradient"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8} sx={{ lineHeight: 0 }}>
            <SoftTypography
              variant="button"
              color={color === "light" ? "dark" : "white"}
              textTransform="capitalize"
              fontWeight="medium"
              opacity={0.7}
            >
              {title}
            </SoftTypography>
            <SoftTypography
              variant="h5"
              color={color === "light" ? "dark" : "white"}
              fontWeight="bold"
            >
              {weather.location} - {weather.degree}&deg;C
            </SoftTypography>
          </Grid>
          <Grid item xs={4}>
            <SoftBox display="flex" flexDirection="column" alignItems="center">
              <SoftBox
                component="img"
                src={icon.component}
                width="50%"
                ml="auto"
                alt="weather icon"
              />
              <SoftBox ml="auto" mr={1}>
                <SoftTypography
                  variant="h5"
                  color={color === "light" ? "dark" : "white"}
                  textTransform="capitalize"
                >
                  {icon.text}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of WeatherCard
WeatherCard.defaultProps = {
  color: "info",
};

// Typechecking props for the WeatherCard
WeatherCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    location: PropTypes.string.isRequired,
    degree: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  icon: PropTypes.shape({
    text: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherCard;
