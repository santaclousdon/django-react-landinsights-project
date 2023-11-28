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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function RankingList({ title, date, rankings }) {
  const renderRankings = rankings.map(({ color, icon, name, description, value }, key) => (
    <SoftBox key={name} component="li" pt={1} pr={2}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center">
        <SoftBox display="flex" alignItems="center">
          <SoftBox mr={2}>
            <SoftButton
              variant="outlined"
              color={color}
              size="small"
              iconOnly
              circular
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(34),
                minWidth: pxToRem(34),
                height: pxToRem(34),
                minHeight: pxToRem(34),
              })}
            >
              <Icon>{icon}</Icon>
            </SoftButton>
          </SoftBox>
          <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </SoftTypography>
            <SoftTypography variant="caption" color="text">
              {description}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </SoftTypography>
      </SoftBox>
      {key === rankings.length - 1 ? null : (
        <Divider
          sx={{
            mt: 2,
            mb: 1,
          }}
        />
      )}
    </SoftBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
        <SoftTypography variant="button" color="text" fontWeight="regular" sx={{ display: "flex" }}>
          <Icon
            color="inherit"
            fontSize="small"
            sx={{
              mr: 0.75,
              mt: -0.125,
            }}
          >
            date_range
          </Icon>
          {date}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {renderRankings}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the RankingList
RankingList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rankings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RankingList;
