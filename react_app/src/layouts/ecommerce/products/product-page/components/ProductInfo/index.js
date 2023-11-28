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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftBadge from "components/SoftBadge";
import SoftSelect from "components/SoftSelect";
import SoftInput from "components/SoftInput";

function ProductInfo() {
  const frameOptions = [
    { value: "aluminium", label: "Aluminium" },
    { value: "carbon", label: "Carbon" },
    { value: "steel", label: "Steel" },
    { value: "wood", label: "Wood" },
  ];

  const colorOptions = [
    { value: "black", label: "black" },
    { value: "blue", label: "blue" },
    { value: "gray", label: "gray" },
    { value: "pink", label: "pink" },
    { value: "red", label: "red" },
    { value: "white", label: "white" },
  ];

  return (
    <SoftBox>
      <SoftBox mb={1}>
        <SoftTypography variant="h3" fontWeight="bold">
          Minimal Bar Stool
        </SoftTypography>
      </SoftBox>
      <SoftTypography variant="h4" color="text">
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star_half</Icon>
      </SoftTypography>
      <SoftBox mt={1}>
        <SoftTypography variant="h6" fontWeight="medium">
          Price
        </SoftTypography>
      </SoftBox>
      <SoftBox mb={1}>
        <SoftTypography variant="h5" fontWeight="medium">
          $1,419
        </SoftTypography>
      </SoftBox>
      <SoftBadge variant="contained" color="success" badgeContent="in stock" container />
      <SoftBox mt={3} mb={1} ml={0.5}>
        <SoftTypography variant="caption" fontWeight="bold">
          Description
        </SoftTypography>
      </SoftBox>
      <SoftBox component="ul" m={0} pl={4} mb={2}>
        <SoftBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <SoftTypography variant="body2" color="text" verticalAlign="middle">
            The most beautiful curves of this swivel stool adds an elegant touch to any environment
          </SoftTypography>
        </SoftBox>
        <SoftBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <SoftTypography variant="body2" color="text" verticalAlign="middle">
            Memory swivel seat returns to original seat position
          </SoftTypography>
        </SoftBox>
        <SoftBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <SoftTypography variant="body2" color="text" verticalAlign="middle">
            Comfortable integrated layered chair seat cushion design
          </SoftTypography>
        </SoftBox>
        <SoftBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <SoftTypography variant="body2" color="text" verticalAlign="middle">
            Fully assembled! No assembly required
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Frame Material
              </SoftTypography>
            </SoftBox>
            <SoftSelect defaultValue={frameOptions[3]} options={frameOptions} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Color
              </SoftTypography>
            </SoftBox>
            <SoftSelect defaultValue={colorOptions[5]} options={colorOptions} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Quantity
              </SoftTypography>
            </SoftBox>
            <SoftInput inputProps={{ type: "number" }} defaultValue={1} />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <SoftButton variant="gradient" color="info" fullWidth>
            add to cart
          </SoftButton>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default ProductInfo;
