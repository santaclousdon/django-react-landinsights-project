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
import SoftTypography from "components/SoftTypography";
import SoftDropzone from "components/SoftDropzone";

function Media() {
  return (
    <SoftBox>
      <SoftTypography variant="h5">Media</SoftTypography>
      <SoftBox mt={3}>
        <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Product Image
          </SoftTypography>
        </SoftBox>
        <SoftDropzone options={{ addRemoveLinks: true }} />
      </SoftBox>
    </SoftBox>
  );
}

export default Media;
