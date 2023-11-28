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
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function ReferralCode() {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <>
      <SoftBox lineHeight={1}>
        <SoftTypography variant="h6" fontWeight="medium">
          Referral Code
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Copy the code bellow to your registered provider.
        </SoftTypography>
      </SoftBox>
      <SoftBox
        borderRadius="md"
        border={`${borderWidth[1]} dashed ${secondary.main}`}
        pt={2}
        pb={1.5}
        px={2}
        mt={2}
      >
        <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="caption" color="text">
            Generated 23 days ago by <span sx={{ fontWeight: "bold" }}>softuidash23</span>
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2} lineHeight={0}>
          <SoftTypography variant="caption" color="text" fontWeight="bold">
            (Used one time)
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" alignItems="center" mb={2}>
          <SoftBox width="70%" mr={1}>
            <SoftInput
              size="small"
              defaultValue="soft-ui-dashboard-vmsk392"
              icon={{ component: "lock", direction: "right" }}
              disabled
            />
          </SoftBox>
          <Tooltip title="Referral code expires in 24 hours" placement="top">
            <SoftButton
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ padding: "0.5rem 1rem" }}
            >
              copy
            </SoftButton>
          </Tooltip>
        </SoftBox>
        <SoftBox mb={0.5} lineHeight={1.2}>
          <SoftTypography component="p" variant="caption" color="text">
            You cannot generate codes.
          </SoftTypography>
          <SoftTypography variant="caption" color="text">
            <SoftTypography
              component={Link}
              variant="caption"
              href="#link"
              className="color-background"
            >
              Contact us
            </SoftTypography>{" "}
            to generate more referrals link.
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </>
  );
}

export default ReferralCode;
