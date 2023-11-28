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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Socials({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { twitter, facebook, instagram } = formField;
  const { twitter: twitterV, facebook: facebookV, instagram: instagramV } = values;

  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Socials
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={twitter.type}
              label={twitter.label}
              name={twitter.name}
              value={twitterV}
              placeholder={twitter.placeholder}
              error={errors.twitter && touched.twitter}
              success={twitterV.length > 0 && !errors.twitter}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={facebook.type}
              label={facebook.label}
              name={facebook.name}
              value={facebookV}
              placeholder={facebook.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={instagram.type}
              label={instagram.label}
              name={instagram.name}
              value={instagramV}
              placeholder={instagram.placeholder}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Socials
Socials.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Socials;
