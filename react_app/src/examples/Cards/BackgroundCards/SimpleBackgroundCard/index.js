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
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function SimpleBackgroundCard({ image, title, description, action }) {
  const template = (
    <Card
      sx={({
        palette: { dark },
        functions: { rgba, linearGradient },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(dark.main, 0.5),
          rgba(dark.main, 0.5)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.lg,
        transform: `perspective(999px) rotateX(0deg) translateZ(0)`,
        transformOrigin: "50% 0",
        transition: "200ms ease-out",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",

        "&:hover, &:focus": {
          transform: `perspective(999px) rotateX(7deg) translate3d(0, -4px, 5px)`,
        },
      })}
    >
      <SoftBox pt={32} pb={3} px={3} lineHeight={1}>
        <SoftTypography variant="h4" color="white" gutterBottom>
          {title}
        </SoftTypography>
        <SoftBox mb={2}>
          <SoftTypography variant="body2" color="white">
            {description}
          </SoftTypography>
        </SoftBox>
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

// Setting default values for the props of SimpleBackgroundCard
SimpleBackgroundCard.defaultProps = {
  action: false,
};

// Typechecking props for the SimpleBackgroundCard
SimpleBackgroundCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
};

export default SimpleBackgroundCard;
