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

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dasboard PRO Material components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dasboard PRO Material base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

function Todo({ color, title, date, project, company, defaultChecked, noDivider }) {
  const { borderWidth } = borders;
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      keepMounted
    >
      <MenuItem onClick={handleCloseMenu}>Action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Another action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <SoftBox
      component="li"
      width="100%"
      pr={2}
      mb={2}
      borderLeft={`${borderWidth[3]} solid ${colors[color].main}`}
      sx={{ listStyle: "none" }}
    >
      <SoftBox width="100%" pl={1} ml={2}>
        <SoftBox display="flex" alignItems="center">
          <Checkbox defaultChecked={defaultChecked} />
          <SoftBox ml={0.2} lineHeight={1}>
            <SoftTypography variant="button" fontWeight="medium">
              {title}
            </SoftTypography>
          </SoftBox>
          <SoftBox ml="auto" color="secondary" pr={3} lineHeight={0}>
            <Icon fontSize="default" sx={{ cursor: "pointer" }} onClick={handleOpenMenu}>
              more_horiz
            </Icon>
          </SoftBox>
          {renderMenu()}
        </SoftBox>
        <SoftBox
          display="flex"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mt={2}
          ml={3}
          pl={0.5}
        >
          <SoftBox lineHeight={1} mb={{ xs: 1, sm: 0 }}>
            <SoftTypography display="block" variant="caption" fontWeight="medium" color="secondary">
              Date
            </SoftTypography>
            <SoftTypography variant="caption" fontWeight="bold" color="text">
              {date}
            </SoftTypography>
          </SoftBox>
          <SoftBox ml={{ xs: 0, sm: "auto" }} mb={{ xs: 1, sm: 0 }} lineHeight={1}>
            <SoftTypography display="block" variant="caption" fontWeight="medium" color="secondary">
              Project
            </SoftTypography>
            <SoftTypography variant="caption" fontWeight="bold" color="text">
              {project}
            </SoftTypography>
          </SoftBox>
          <SoftBox mx={{ xs: 0, sm: "auto" }} lineHeight={1}>
            <SoftTypography display="block" variant="caption" fontWeight="medium" color="secondary">
              Company
            </SoftTypography>
            <SoftTypography variant="caption" fontWeight="bold" color="text">
              {company}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      {noDivider ? null : <Divider sx={{ marginBottom: 0 }} />}
    </SoftBox>
  );
}

// Setting default values for the props of Todo
Todo.defaultProps = {
  color: "info",
  noDivider: false,
  defaultChecked: false,
};

// Typechecking props for the Todo
Todo.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  noDivider: PropTypes.bool,
};

export default Todo;
