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
import SoftProgress from "components/SoftProgress";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function SocialItem({ icon, title, percentage }) {
  const { socialMediaColors } = colors;
  const { size } = typography;

  return (
    <SoftBox width="100%" py={1} mb={1}>
      <SoftBox display="flex" justifyContent="space-between" mb={1}>
        <SoftBox display="flex" alignItems="center" lineHeight={0}>
          <SoftBox mr={1} color={socialMediaColors[icon.color].main} fontSize={size.lg}>
            {icon.component}
          </SoftBox>
          <SoftTypography variant="button" fontWeight="medium" color="text">
            {title}
          </SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" fontWeight="medium" color="text">
          {percentage}%
        </SoftTypography>
      </SoftBox>
      <SoftProgress value={percentage} color="dark" />
    </SoftBox>
  );
}

// Typechecking props for the SocialItem
SocialItem.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      "facebook",
      "twitter",
      "instagram",
      "linkedin",
      "pinterest",
      "youtube",
      "vimeo",
      "slack",
      "dribbble",
      "github",
      "reddit",
      "tumblr",
    ]).isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SocialItem;
