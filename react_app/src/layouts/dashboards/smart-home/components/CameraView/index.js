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
import Fade from "@mui/material/Fade";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";

function CameraView({ image, date, time, value, index }) {
  const { size } = typography;

  return (
    value === index && (
      <Fade in timeout={850}>
        <SoftBox width="100%" height="100%" position="relative" borderRadius="lg">
          <SoftBox
            component="img"
            src={image}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            borderRadius="lg"
            sx={{ objectFit: "cover", objectPosition: "center" }}
          />
          <SoftBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            width="calc(100% - 1rem)"
          >
            <SoftBox p={2}>
              <SoftTypography variant="h6" fontWeight="regular" color="white">
                {date} &nbsp; {time}
              </SoftTypography>
            </SoftBox>
            <SoftBadge
              color="secondary"
              variant="contained"
              size="lg"
              badgeContent={
                <SoftBox display="flex" alignItems="center">
                  <SoftBox color="error" lineHeight={0} fontSize={size.md}>
                    <Icon>fiber_manual_record</Icon>
                  </SoftBox>
                  <SoftBox mb={-0.25} ml={0.25}>
                    <SoftTypography
                      component="span"
                      variant="caption"
                      color="text"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      recording
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              }
            />
          </SoftBox>
        </SoftBox>
      </Fade>
    )
  );
}

// Typechecking props for the CameraView
CameraView.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CameraView;
