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
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftEditor from "components/SoftEditor";
import SoftSelect from "components/SoftSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function ProductInfo() {
  return (
    <Card sx={{ overflow: "visible" }}>
      <SoftBox p={3}>
        <SoftTypography variant="h5">Product Information</SoftTypography>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField type="text" label="name" defaultValue="Minimal Bar Stool" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField type="number" label="weight" defaultValue={2} />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="collection" defaultValue="Summer" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="price" defaultValue="$90" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="quantity" defaultValue={50} />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
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
                  Color
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                defaultValue={{ value: "black", label: "Black" }}
                options={[
                  { value: "black", label: "Black" },
                  { value: "blue", label: "Blue" },
                  { value: "green", label: "Green" },
                  { value: "orange", label: "Orange" },
                  { value: "white", label: "White" },
                ]}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default ProductInfo;
