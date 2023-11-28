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
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import OutlinedCounterCard from "examples/Cards/CounterCards/OutlinedCounterCard";
import TransparentInfoCard from "examples/Cards/InfoCards/TransparentInfoCard";
import ComplexBackgroundCard from "examples/Cards/BackgroundCards/ComplexBackgroundCard";
import DataTable from "examples/Tables/DataTable";

// Referral page components
import ReferralCode from "layouts/ecommerce/referral/components/ReferralCode";
import OutlinedCard from "layouts/ecommerce/referral/components/OutlinedCard";

// Data
import dataTableData from "layouts/ecommerce/referral/data/dataTableData";

// Images
import officeDark from "assets/images/office-dark.jpg";

const image1 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/window-desk.jpg";

function Referral() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={2}>
              <SoftBox mb={1}>
                <SoftTypography variant="h5" fontWeight="medium">
                  Referral Program
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="body2" fontWeight="regular" color="text">
                Track and find all the details about our referral program, your stats and revenues.
              </SoftTypography>
            </SoftBox>
            <SoftBox p={2}>
              <Grid container spacing={3}>
                <Grid item xs={6} lg={3}>
                  <OutlinedCounterCard count={23980} prefix="$" title="earnings" />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <OutlinedCounterCard count={2400} prefix="$" title="customers" />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <OutlinedCounterCard count={48} prefix="$" title="avg. value" />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <OutlinedCounterCard count={4} suffix="%" title="refund rate" />
                </Grid>
              </Grid>
              <SoftBox mt={6} mb={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={5}>
                    <ReferralCode />
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <SoftTypography variant="h6" fontWeight="medium">
                      How to use
                    </SoftTypography>
                    <SoftBox mb={2}>
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        Integrate your referral code in 3 easy steps.
                      </SoftTypography>
                    </SoftBox>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <TransparentInfoCard
                          color="dark"
                          icon="paid"
                          description="1. Create & validate your referral link and get"
                          value={
                            <>
                              <SoftTypography component="span" variant="button">
                                $
                              </SoftTypography>
                              100
                            </>
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TransparentInfoCard
                          color="dark"
                          icon="unarchive"
                          description="2. For every order you make you get"
                          value={
                            <>
                              10
                              <SoftTypography component="span" variant="button">
                                %
                              </SoftTypography>
                            </>
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TransparentInfoCard
                          color="dark"
                          icon="emoji_events"
                          description="3. Get other friends to generate link and get"
                          value={
                            <>
                              <SoftTypography component="span" variant="button">
                                $
                              </SoftTypography>
                              500
                            </>
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SoftBox>
              <Divider />
              <SoftBox mt={2}>
                <SoftBox mb={1}>
                  <SoftTypography variant="h6" fontWeight="medium">
                    Other programs
                  </SoftTypography>
                </SoftBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={4}>
                    <ComplexBackgroundCard
                      image={image1}
                      description="User #hashtag in a photo on social media and get $10 for each purchase you make."
                      action={{
                        type: "internal",
                        route: "/ecommerce/referral",
                        label: "read more",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ComplexBackgroundCard
                      image={officeDark}
                      description="Send the invitation link to 10 friends and get a 50% coupon to use on any purchase."
                      action={{
                        type: "internal",
                        route: "/ecommerce/referral",
                        label: "read more",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <OutlinedCard />
                  </Grid>
                </Grid>
              </SoftBox>
            </SoftBox>
          </Card>
        </SoftBox>
        <Card>
          <SoftBox pt={3} px={3}>
            <SoftTypography variant="h6" fontWeight="medium">
              Top Referred Users
            </SoftTypography>
          </SoftBox>
          <DataTable
            table={dataTableData}
            entriesPerPage={false}
            showTotalEntries={false}
            isSorted={false}
            noEndBorder
          />
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Referral;
