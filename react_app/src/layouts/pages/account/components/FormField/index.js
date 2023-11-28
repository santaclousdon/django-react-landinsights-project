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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

function FormField({ label, ...rest }) {
  return (
    <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
      <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <SoftTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </SoftTypography>
      </SoftBox>
      <SoftInput {...rest} />
    </SoftBox>
  );
}

// Setting default values for the props of FormField
FormField.defaultProps = {
  label: " ",
};

// Typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string,
};

export default FormField;
