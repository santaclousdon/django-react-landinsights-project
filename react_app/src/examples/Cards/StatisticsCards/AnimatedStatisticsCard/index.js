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

import { useEffect, useRef } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// vanilla-tilt library
import VanillaTilt from "vanilla-tilt";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

// Images
import whiteCurved from "assets/images/curved-images/white-curved.jpeg";

function AnimatedStatisticsCard({ color, title, count, percentage, action }) {
  const sharedStyles = {
    transform: `translateZ(50px) scale(0.7)`,
    transition: "all 500ms linear",
  };

  const actionStyles = {
    my: 1,
    width: ({ functions: { pxToRem } }) => pxToRem(160),
    ...sharedStyles,

    "&:hover, &:focus": {
      transform: `translateZ(50px) scale(0.7)`,
    },
  };

  const tiltRef = useRef();

  useEffect(() => {
    const { current: tiltNode } = tiltRef;
    const vanillaTiltOptions = {
      reverse: false,
      max: 35,
      perspective: 1000,
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(0.03,0.98,0.52,0.99)",
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef}>
      <Card
        sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
          backgroundImage: gradients[color]
            ? `${linearGradient(
                rgba(gradients[color].main, 0.85),
                rgba(gradients[color].state, 0.85)
              )}, url(${whiteCurved})`
            : `${linearGradient(
                rgba(gradients[color].main, 0.85),
                rgba(gradients[color].state, 0.85)
              )}, url(${whiteCurved})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "visible",
        })}
      >
        <SoftBox p={3} display="flex" flexDirection="column" alignItems="center">
          <SoftBox mt={1}>
            <SoftTypography
              variant="h2"
              color="white"
              textTransform="capitalize"
              fontWeight="bold"
              sx={{
                mt: 1,
                ...sharedStyles,
              }}
            >
              {title}
            </SoftTypography>
          </SoftBox>
          <SoftTypography variant="h1" fontWeight="bold" color="white" sx={sharedStyles}>
            {count}
          </SoftTypography>
          <SoftBox sx={sharedStyles}>
            <SoftBadge
              color={percentage.color}
              badgeContent={<>&nbsp;{percentage.label}&nbsp;</>}
              size="lg"
              container
            />
          </SoftBox>
          {action.type === "internal" ? (
            <SoftButton
              component={Link}
              to={action.route}
              variant="outlined"
              color="white"
              sx={actionStyles}
            >
              {action.label}
            </SoftButton>
          ) : (
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              color="white"
              size="small"
              sx={actionStyles}
            >
              {action.label}
            </SoftButton>
          )}
        </SoftBox>
      </Card>
    </div>
  );
}

// Setting default values for the props of AnimatedStatisticsCard
AnimatedStatisticsCard.defaultProps = {
  color: "info",
};

// Typechecking props for the AnimatedStatisticsCard
AnimatedStatisticsCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnimatedStatisticsCard;
