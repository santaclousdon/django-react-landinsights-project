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
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function ControllerCard({ color, state, icon, title, description, onChange }) {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox
        p={3}
        height="100%"
        bgColor={state ? color : "white"}
        variant="gradient"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <SoftTypography variant="body2" color={state ? "white" : "text"}>
            {state ? "On" : "Off"}
          </SoftTypography>
          <SoftBox mr={1}>
            <Switch checked={state} onChange={onChange} />
          </SoftBox>
        </SoftBox>
        {icon}
        <SoftBox mt={1} lineHeight={1}>
          <SoftTypography
            variant="body2"
            color={state ? "white" : "text"}
            textTransform="capitalize"
            fontWeight="medium"
          >
            {title}
          </SoftTypography>
          {description ? (
            <SoftTypography variant="caption" color={state ? "white" : "text"}>
              {description}
            </SoftTypography>
          ) : null}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of ControllerCard
ControllerCard.defaultProps = {
  color: "info",
  state: false,
  description: "",
};

// Typechecking props for the ControllerCard
ControllerCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  state: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ControllerCard;
