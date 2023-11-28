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
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";

function OutlinedPricingCard({ color, title, description, price, specifications, action }) {
  const { borderWidth, borderColor } = borders;

  const renderSpecifications = specifications.map(({ label, includes }, key) => (
    <SoftBox
      key={label}
      display="flex"
      alignItems="center"
      pb={specifications.length - 1 !== key ? 2 : 0}
    >
      <SoftTypography variant="body1" color={includes ? "success" : "error"} sx={{ lineHeight: 0 }}>
        <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "close"}</Icon>
      </SoftTypography>
      <SoftBox pl={2} lineHeight={1}>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          {label}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  ));

  return (
    <SoftBox height="100%" borderRadius="xl" border={`${borderWidth[1]} solid ${borderColor}`}>
      <SoftBox pt={3} pb={0.5} px={3} lineHeight={1} textAlign="center">
        <SoftTypography variant="h5" color={color}>
          {title}
        </SoftTypography>
        <SoftBox mb={2} mt={0.5}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={2} mb={1}>
          <SoftTypography variant="h3" color={color} fontWeight="bold">
            {price.value}&nbsp;
            <SoftTypography variant="button" color="text" fontWeight="regular">
              /{price.type}
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={3} mb={1}>
          {action.type === "internal" ? (
            <SoftButton
              component={Link}
              to={action.route}
              variant="gradient"
              color={color}
              size="small"
              fullWidth
            >
              {action.label}
            </SoftButton>
          ) : (
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color={color}
              size="small"
              fullWidth
            >
              {action.label}
            </SoftButton>
          )}
        </SoftBox>
      </SoftBox>
      <Divider />
      <SoftBox pt={1} pb={3} px={3}>
        {renderSpecifications}
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of OutlinedPricingCard
OutlinedPricingCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the OutlinedPricingCard
OutlinedPricingCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default OutlinedPricingCard;
