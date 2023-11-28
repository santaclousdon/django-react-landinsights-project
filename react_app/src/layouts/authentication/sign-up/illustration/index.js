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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Images
import rocket from "assets/images/illustrations/rocket-white.png";

function Illustration() {
  const [agreement, setAgreemnet] = useState(true);

  const handleSetAgremment = () => setAgreemnet(!agreement);

  return (
    <IllustrationLayout
      title="Sign Up"
      description="Enter your email and password to register"
      illustration={{
        image: rocket,
        title: "Your journey starts here",
        description:
          "Just as it takes a company to sustain a product, it takes a community to sustain a protocol.",
      }}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftInput placeholder="Name" size="large" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput type="email" placeholder="Email" size="large" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput type="password" placeholder="Password" size="large" />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Checkbox checked={agreement} onChange={handleSetAgremment} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetAgremment}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;I agree the&nbsp;
          </SoftTypography>
          <SoftTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
            Terms and Conditions
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" size="large" fullWidth>
            sign up
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Already have an account?&nbsp;
            <SoftTypography
              component={Link}
              to="/authentication/sign-in/illustration"
              variant="button"
              color="info"
              fontWeight="bold"
              textGradient
            >
              Sign in
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default Illustration;
