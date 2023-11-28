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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

function PricingCards() {
  return (
    <SoftBox mt={8}>
      <SoftBox textAlign="center">
        <SoftTypography variant="h6" opacity={0.5}>
          More than 50+ brands trust Soft
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} lg={2}>
            <SoftBox
              component="img"
              src={coinbase}
              alt="coinbase"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SoftBox component="img" src={nasa} alt="nasa" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SoftBox component="img" src={netflix} alt="netflix" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SoftBox
              component="img"
              src={pinterest}
              alt="pinterest"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SoftBox component="img" src={spotify} alt="spotify" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <SoftBox
              component="img"
              src={vodafone}
              alt="vodafone"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default PricingCards;
