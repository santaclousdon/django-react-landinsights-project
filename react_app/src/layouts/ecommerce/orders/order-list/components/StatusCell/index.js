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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function StatusCell({ icon, color, status }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftBox mr={1}>
        <SoftButton variant="outlined" color={color} size="small" iconOnly circular>
          <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
        </SoftButton>
      </SoftBox>
      <SoftTypography variant="caption" fontWeight="medium" color="text" sx={{ lineHeight: 0 }}>
        {status}
      </SoftTypography>
    </SoftBox>
  );
}

// Typechecking props for the StatusCell
StatusCell.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusCell;
