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

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React icons
import Settings from "examples/Icons/Settings";
import Cube from "examples/Icons/Cube";
import SpaceShip from "examples/Icons/SpaceShip";

function Account() {
  const [design, setDesign] = useState(false);
  const [code, setCode] = useState(false);
  const [develop, setDevelop] = useState(false);

  const handleSetDesign = () => setDesign(!design);
  const handleSetCode = () => setCode(!code);
  const handleSetDevelop = () => setDevelop(!develop);

  const customButtonStyles = ({
    functions: { pxToRem, rgba },
    borders: { borderWidth },
    palette: { transparent, dark, secondary },
  }) => ({
    width: pxToRem(150),
    height: pxToRem(120),
    borderWidth: borderWidth[2],
    mb: 1,
    ml: 0.5,

    "&.MuiButton-contained, &.MuiButton-contained:hover": {
      boxShadow: "none",
      border: `${borderWidth[2]} solid ${transparent.main}`,
    },

    "&:hover": {
      backgroundColor: `${transparent.main} !important`,
      border: `${borderWidth[2]} solid ${secondary.main} !important`,

      "& svg g": {
        fill: rgba(dark.main, 0.75),
      },
    },
  });

  return (
    <SoftBox>
      <SoftBox width="80%" textAlign="center" mx="auto" mb={4}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5" fontWeight="regular">
            What are you doing? (checkboxes)
          </SoftTypography>
        </SoftBox>
        <SoftTypography variant="body2" fontWeight="regular" color="text">
          Give us more details about you. What do you enjoy doing in your spare time?
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={2}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <SoftBox textAlign="center">
              <SoftButton
                color="secondary"
                variant={design ? "contained" : "outlined"}
                onClick={handleSetDesign}
                sx={customButtonStyles}
              >
                <Settings size="24px" color={design ? "white" : "dark"} />
              </SoftButton>
              <SoftTypography variant="h6">Design</SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <SoftBox textAlign="center">
              <SoftButton
                color="secondary"
                variant={code ? "contained" : "outlined"}
                onClick={handleSetCode}
                sx={customButtonStyles}
              >
                <Cube size="24px" color={code ? "white" : "dark"} />
              </SoftButton>
              <SoftTypography variant="h6">Code</SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <SoftBox textAlign="center">
              <SoftButton
                color="secondary"
                variant={develop ? "contained" : "outlined"}
                onClick={handleSetDevelop}
                sx={customButtonStyles}
              >
                <SpaceShip size="24px" color={develop ? "white" : "dark"} />
              </SoftButton>
              <SoftTypography variant="h6">Develop</SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Account;
