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
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftProgress from "components/SoftProgress";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function Reviews() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Reviews
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={2} px={2}>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox component="li" w="100%" py={1} mb={0.5}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                positive reviews
              </SoftTypography>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                80%
              </SoftTypography>
            </SoftBox>
            <SoftProgress variant="gradient" value={80} />
          </SoftBox>
          <SoftBox component="li" w="100%" py={1} mb={0.5}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                neutral reviews
              </SoftTypography>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                17%
              </SoftTypography>
            </SoftBox>
            <SoftProgress variant="gradient" color="dark" value={17} />
          </SoftBox>
          <SoftBox component="li" w="100%" py={1} mb={0.5}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                negative reviews
              </SoftTypography>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                3%
              </SoftTypography>
            </SoftBox>
            <SoftProgress variant="gradient" color="error" value={3} />
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <SoftBox pb={2} px={2} display="flex" flexDirection={{ xs: "column", sm: "row" }} mt="auto">
        <SoftBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            More than <strong>1,500,000</strong> developers used Creative Tim&apos;s products and
            over <strong>700,000</strong>
            projects were created.
          </SoftTypography>
        </SoftBox>
        <SoftBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
          <SoftButton variant="gradient" color="dark">
            view all reviews
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Reviews;
