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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function DefaultTeamCard({ image, name, jobTitle, action }) {
  const template = (
    <Card>
      <SoftBox p={2} textAlign="center" lineHeight={1}>
        <SoftBox component="img" src={image} alt={name} width="100%" borderRadius="md" />
        <SoftBox mt={2} mb={0.5}>
          <SoftTypography variant="h5" textTransform="capitalize">
            {name}
          </SoftTypography>
        </SoftBox>
        <SoftTypography
          variant="caption"
          textTransform="uppercase"
          fontWeight="bold"
          color={jobTitle.color ? jobTitle.color : "info"}
          textGradient
        >
          {jobTitle.label}
        </SoftTypography>
      </SoftBox>
    </Card>
  );

  return action.type === "external" ? (
    <MuiLink href={action.route} target="_blank" rel="noreferrer">
      {template}
    </MuiLink>
  ) : (
    <Link to={action.route}>{template}</Link>
  );
}

// Typechecking props for the DefaultTeamCard
DefaultTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.shape({
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
    label: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultTeamCard;
