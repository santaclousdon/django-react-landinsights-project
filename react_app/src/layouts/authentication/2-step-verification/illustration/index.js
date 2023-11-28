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
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import chat from "assets/images/illustrations/danger-chat-ill.png";

function Illustration() {
  return (
    <IllustrationLayout
      color="warning"
      header={
        <SoftBox px={5} textAlign="center">
          <SoftTypography variant="h2" fontWeight="bold">
            2-Step Verification
          </SoftTypography>
        </SoftBox>
      }
      illustration={{
        image: chat,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <Grid container spacing={2}>
            <Grid item xs>
              <SoftInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <SoftInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <SoftInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <SoftInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftButton variant="gradient" color="warning" fullWidth>
            send code
          </SoftButton>
        </SoftBox>
        <SoftBox textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Haven&apos;t received it?{" "}
            <SoftTypography component="a" href="#verification" variant="button">
              Resend a new code
            </SoftTypography>
            .
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default Illustration;
