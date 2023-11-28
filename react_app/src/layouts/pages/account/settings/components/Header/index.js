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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <SoftBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SoftAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SoftBox height="100%" mt={0.5} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                CEO / Co-Founder
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <SoftBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <SoftTypography variant="caption" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </SoftTypography>
              <SoftBox mx={1}>
                <Switch checked={visible} onChange={handleSetVisible} />
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default Header;
