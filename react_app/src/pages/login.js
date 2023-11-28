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

// Copied from ./layouts/authentication/sign-in/basic

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

import BasicWrapper from "custom_components/basic_wrapper";

// Images
import curved9 from "assets/images/curved-images/curved9.jpg";

function Login() {
    return (
        <BasicWrapper title="Welcome!" description="Login Here" image={curved9}>
            <Card>
                <SoftBox p={3} mb={1} textAlign="center">
                    <SoftTypography variant="h5" fontWeight="medium">
                        Sign in
                    </SoftTypography>
                </SoftBox>
                <SoftBox p={3}>
                    <SoftBox component="form" role="form">
                        <SoftBox mb={2}>
                            <SoftInput type="email" placeholder="Email" />
                        </SoftBox>
                        <SoftBox mb={2}>
                            <SoftInput type="password" placeholder="Password" />
                        </SoftBox>
                        <SoftBox mt={4} mb={1}>
                            <SoftButton variant="gradient" color="info" fullWidth>
                                sign in
                            </SoftButton>
                        </SoftBox>
                    </SoftBox>
                </SoftBox>
            </Card>
        </BasicWrapper>
    );
}

export default Login;
