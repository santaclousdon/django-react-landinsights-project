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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import lock from "assets/images/illustrations/lock.png";

function Illustration() {
  return (
    <IllustrationLayout
      title="Reset Password"
      description="You will receive an e-mail in maximum 60 seconds"
      illustration={{
        image: lock,
        title: "Soft UI Design",
        description:
          "Just as it takes a company to sustain a product, it takes a community to sustain a protocol.",
      }}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftInput type="email" placeholder="Email" size="large" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput placeholder="Verification Code" size="large" />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" size="large" fullWidth>
            send
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default Illustration;
