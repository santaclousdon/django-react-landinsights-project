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

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

function PagesHeaderCell({ children }) {
  const { light } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  return (
    <SoftBox
      component="th"
      width="100%"
      textAlign="left"
      borderBottom={`${borderWidth[1]} solid ${light.main}`}
      py={1.5}
      pl={1}
      pr={3}
    >
      <SoftBox
        width="max-content"
        textAlign="left"
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="secondary"
        opacity={0.7}
        sx={{ textTransform: "uppercase" }}
      >
        {children}
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the PagesHeaderCell
PagesHeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PagesHeaderCell;
