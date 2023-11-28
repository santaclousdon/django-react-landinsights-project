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
import SoftEditor from "components/SoftEditor";
import SoftSelect from "components/SoftSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function ProductInfo() {
  return (
    <SoftBox>
      <SoftTypography variant="h5">Product Information</SoftTypography>
      <SoftBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="name" placeholder="eg. Off-White" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="weight" placeholder="eg. 42" />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Description&nbsp;&nbsp;
                <SoftTypography variant="caption" fontWeight="regular" color="text">
                  (optional)
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
            <SoftEditor />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SoftBox mb={3}>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Category
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                defaultValue={{ value: "clothing", label: "Clothing" }}
                options={[
                  { value: "clothing", label: "Clothing" },
                  { value: "electronics", label: "Electronics" },
                  { value: "furniture", label: "Furniture" },
                  { value: "others", label: "Others" },
                  { value: "real estate", label: "Real Estate" },
                ]}
              />
            </SoftBox>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Size
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              defaultValue={{ value: "medium", label: "Medium" }}
              options={[
                { value: "extra large", label: "Extra Large" },
                { value: "extra small", label: "Extra Small" },
                { value: "large", label: "Large" },
                { value: "medium", label: "Medium" },
                { value: "small", label: "Small" },
              ]}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default ProductInfo;
