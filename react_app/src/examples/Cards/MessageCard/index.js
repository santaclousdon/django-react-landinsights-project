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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function MessageCard({ image, text, action }) {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <SoftBox
              component="img"
              src={image}
              alt="message-image"
              borderRadius="lg"
              shadow="md"
              width="100%"
              display="inherit"
            />
          </Grid>
          <Grid item xs={8}>
            <SoftBox mb={2} lineHeight={1.4}>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                {text}
              </SoftTypography>
            </SoftBox>
            {action.type === "internal" ? (
              <SoftButton
                component={Link}
                to={action.route}
                color={action.color}
                variant="gradient"
                size="small"
              >
                {action.label}
              </SoftButton>
            ) : (
              <SoftButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color={action.color}
                variant="gradient"
                size="small"
              >
                {action.label}
              </SoftButton>
            )}
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the MessageCard
MessageCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "default",
      "primary",
      "secondary",
      "info",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageCard;
