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

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

function Sessions() {
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <SoftBox p={3} lineHeight={1}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5">Sessions</SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove those that you do not
          recognize.
        </SoftTypography>
      </SoftBox>
      <SoftBox pb={3} px={3} sx={{ overflow: "auto" }}>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <SoftBox display="flex" alignItems="center">
            <SoftBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </SoftBox>
            <SoftBox height="100%" ml={2} lineHeight={1.4} mr={2}>
              <SoftTypography display="block" variant="button" fontWeight="regular" color="text">
                Bucharest 68.133.163.201
              </SoftTypography>
              <SoftTypography variant="caption" color="text">
                Your current session
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" alignItems="center">
            <SoftBadge
              variant="contained"
              size="xs"
              badgeContent="active"
              color="success"
              container
            />
            <SoftBox mx={2} lineHeight={1}>
              <SoftTypography variant="button" color="secondary" fontWeight="regular">
                EU
              </SoftTypography>
            </SoftBox>
            <SoftTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <Divider />
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <SoftBox display="flex" alignItems="center" mr={2}>
            <SoftBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </SoftBox>
            <SoftBox ml={2}>
              <SoftTypography display="block" variant="body2" fontWeight="regular" color="text">
                Chrome on macOS
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" alignItems="center">
            <SoftBox mx={2} lineHeight={1}>
              <SoftTypography variant="button" color="secondary" fontWeight="regular">
                US
              </SoftTypography>
            </SoftBox>
            <SoftTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <Divider />
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <SoftBox display="flex" alignItems="center" mr={2}>
            <SoftBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">phone_iphone</Icon>
            </SoftBox>
            <SoftBox ml={2}>
              <SoftTypography display="block" variant="body2" fontWeight="regular" color="text">
                Safari on iPhone
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" alignItems="center">
            <SoftBox mx={2} lineHeight={1}>
              <SoftTypography variant="button" color="secondary" fontWeight="regular">
                US
              </SoftTypography>
            </SoftBox>
            <SoftTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Sessions;
