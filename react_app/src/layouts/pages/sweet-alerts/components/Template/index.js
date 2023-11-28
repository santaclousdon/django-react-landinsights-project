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

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function Template({ title, action }) {
  return (
    <Card>
      <SoftBox p={3} textAlign="center">
        <SoftBox mb={2}>
          <SoftTypography variant="body2" color="text">
            {title}
          </SoftTypography>
        </SoftBox>
        <SoftButton variant="gradient" color="info" onClick={action}>
          try me!
        </SoftButton>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the Template
Template.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Template;
