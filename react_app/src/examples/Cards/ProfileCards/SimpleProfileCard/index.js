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
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

function SimpleProfileCard({ image, name, position, description, action }) {
  return (
    <SoftBox display="flex" flexDirection="column" alignItems="center" textAlign="center">
      {action.type === "external" ? (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          <SoftAvatar src={image} alt={name} size="xl" shadow="md" variant="rounded" />
        </MuiLink>
      ) : (
        <Link to={action.route}>
          <SoftAvatar src={image} alt={name} size="xl" shadow="md" variant="rounded" />
        </Link>
      )}
      <SoftBox p={3}>
        {action.type === "external" ? (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <SoftTypography variant="h4">{name}</SoftTypography>
          </MuiLink>
        ) : (
          <Link to={action.route}>
            <SoftTypography variant="h4">{name}</SoftTypography>
          </Link>
        )}
        <SoftTypography variant="h6" color={position.color} textGradient gutterBottom>
          {position.label}
        </SoftTypography>
        <SoftTypography variant="body2" color="text">
          {description}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default props for the SimpleProfileCard
SimpleProfileCard.defaultProps = {
  description: "",
  action: { type: "internal", route: "#" },
};

// Typechecking props for the SimpleProfileCard
SimpleProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }),
};

export default SimpleProfileCard;
