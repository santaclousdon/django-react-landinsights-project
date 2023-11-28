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

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Socials() {
  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Socials
      </SoftTypography>
      <SoftBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="shoppify handle" placeholder="@soft" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="facebook account" placeholder="https://..." />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="instagram account" placeholder="https://..." />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Socials;
