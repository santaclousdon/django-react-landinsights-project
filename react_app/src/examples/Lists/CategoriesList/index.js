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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function CategoriesList({ title, categories }) {
  const renderItems = categories.map(({ color, icon, name, description, route }, key) => (
    <SoftBox
      key={name}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      py={1}
      pr={2}
      mb={categories.length - 1 === key ? 0 : 1}
    >
      <SoftBox display="flex" alignItems="center">
        <SoftBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          bgColor={color}
          borderRadius="lg"
          shadow="md"
          color="white"
          width="2rem"
          height="2rem"
          mr={2}
          variant="gradient"
        >
          <Icon
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {icon}
          </Icon>
        </SoftBox>
        <SoftBox display="flex" flexDirection="column">
          <SoftTypography variant="button" color={color} fontWeight="medium" gutterBottom>
            {name}
          </SoftTypography>
          <SoftTypography variant="caption" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox display="flex">
        <SoftTypography
          component={Link}
          variant="button"
          color={color}
          to={route}
          sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,

            "&:hover, &:focus": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  ));

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
