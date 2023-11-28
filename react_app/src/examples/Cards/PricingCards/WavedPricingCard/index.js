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
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Custom styles for the WavedPricingCard
import WavedPricingCardWavesRoot from "examples/Cards/PricingCards/WavedPricingCard/WavedPricingCardWavesRoot";

function WavedPricingCard({ color, title, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ count, label }, key) => (
    <SoftBox component="li" key={label} textAlign="center">
      <SoftTypography variant="body2" color="text">
        <SoftBox component="strong" color="text">
          {count}
        </SoftBox>{" "}
        {label}
      </SoftTypography>
      {specifications.length - 1 === key ? null : <Divider />}
    </SoftBox>
  ));

  return (
    <Card>
      <SoftBox
        position="relative"
        pt={3}
        pb={6}
        px={3}
        textAlign="center"
        bgColor={color}
        variant="gradient"
      >
        <SoftBox position="relative" zIndex={1}>
          <SoftTypography variant="h5" color={color === "light" ? "dark" : "white"} gutterBottom>
            {title}
          </SoftTypography>
          <SoftTypography
            variant="h1"
            fontWeight="bold"
            color={color === "light" ? "dark" : "white"}
          >
            <SoftBox component="small" color={color === "light" ? "dark" : "white"}>
              {price.currency}
            </SoftBox>
            {price.value}
          </SoftTypography>
          <SoftTypography
            variant="body2"
            fontWeight="medium"
            color={color === "light" ? "dark" : "white"}
            gutterBottom
          >
            {price.type}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox position="relative" height="3.125rem" overflow="hidden" zIndex={2} mt={-5}>
        <SoftBox position="absolute" width="100%" top={0} zIndex={1}>
          <SoftBox
            component="svg"
            position="relative"
            width="100%"
            height="3.125rem"
            minHeight="3.125rem"
            maxHeight="3.125rem"
            mb={-0.875}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 40"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="card-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <WavedPricingCardWavesRoot>
              <use xlinkHref="#card-wave" x="48" y="-1" fill="rgba(255,255,255,0.30" />
              <use xlinkHref="#card-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
              <use xlinkHref="#card-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
              <use xlinkHref="#card-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
              <use xlinkHref="#card-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
              <use xlinkHref="#card-wave" x="48" y="16" fill="rgba(255,255,255,0.99)" />
            </WavedPricingCardWavesRoot>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <SoftBox p={4.5}>
        <SoftBox component="ul" mx="auto" sx={{ listStyle: "none" }}>
          {renderSpecifications}
        </SoftBox>
        {action.type === "internal" ? (
          <SoftBox mt={4.5}>
            <SoftButton
              component={Link}
              to={action.route}
              variant="gradient"
              color={color}
              fullWidth
            >
              {action.label}
            </SoftButton>
          </SoftBox>
        ) : (
          <SoftBox mt={4.5}>
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color={color}
              fullWidth
            >
              {action.label}
            </SoftButton>
          </SoftBox>
        )}
      </SoftBox>
    </Card>
  );
}

// Setting default props for the WavedPricingCard
WavedPricingCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the WavedPricingCard
WavedPricingCard.propTypes = {
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
  price: PropTypes.shape({
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default WavedPricingCard;
