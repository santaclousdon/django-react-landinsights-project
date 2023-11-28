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
import Link from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";

function ComplexProfileCard({ image, name, position, description, social }) {
  const { socialMediaColors } = colors;

  // Render the social media icons
  const renderSocial = social.map(({ link, icon, color }, key) => (
    <SoftBox
      key={color}
      component={Link}
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize="1.375rem"
      color={socialMediaColors[color].main}
      py={1.5}
      pr={1.5}
      pl={key === 0 ? 0 : 1.5}
      lineHeight={1}
    >
      {icon}
    </SoftBox>
  ));

  return (
    <SoftBox width="100%" height="100%" display="flex" alignItems="center">
      <SoftBox width="40%" height="100%">
        <SoftBox
          component="img"
          src={image}
          alt={name}
          shadow="lg"
          borderRadius="lg"
          width="100%"
          height="100%"
          sx={{ objectFit: "cover" }}
        />
      </SoftBox>
      <SoftBox width="60%" py={2.5} px={4}>
        <SoftBox mb={1} lineHeight={1}>
          <SoftTypography variant="h5" fontWeight="bold">
            {name}
          </SoftTypography>
          <SoftTypography
            variant="button"
            color="text"
            textTransform="uppercase"
            fontWeight="medium"
          >
            {position}
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftTypography variant="body2" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex">{renderSocial}</SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default props for the ComplexProfileCard
ComplexProfileCard.defaultProps = {
  description: "",
  social: [{}],
};

// Typechecking props for the ComplexProfileCard
ComplexProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string,
  social: PropTypes.arrayOf(PropTypes.object),
};

export default ComplexProfileCard;
