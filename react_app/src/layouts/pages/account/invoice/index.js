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
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Invoice page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";

// Images
import logoCT from "assets/images/logo-ct.png";

function Invoice() {
  const { borderWidth } = borders;
  const { light } = colors;
  const borderBottom = `${borderWidth[1]} solid ${light.main}`;

  return (
    <BaseLayout stickyNavbar>
      <SoftBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              {/* Invoice header */}
              <SoftBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={12} md={4}>
                    <SoftBox component="img" src={logoCT} width="25%" p={1} mb={1} />
                    <SoftTypography variant="h6" fontWeight="medium">
                      St. Independence Embankment, 050105 Bucharest, Romania
                    </SoftTypography>
                    <SoftBox mt={1} mb={2}>
                      <SoftTypography display="block" variant="body2" color="secondary">
                        tel: +4 (074) 1090873
                      </SoftTypography>
                    </SoftBox>
                  </Grid>
                  <Grid item xs={12} md={7} lg={3}>
                    <SoftBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <SoftBox mt={1}>
                        <SoftTypography variant="h6" fontWeight="medium">
                          Billed to: John Doe
                        </SoftTypography>
                      </SoftBox>
                      <SoftBox mb={1}>
                        <SoftTypography variant="body2" color="secondary">
                          4006 Locust View Drive
                          <br />
                          San Francisco CA
                          <br />
                          California
                        </SoftTypography>
                      </SoftBox>
                    </SoftBox>
                  </Grid>
                </Grid>
                <SoftBox mt={{ xs: 5, md: 10 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                      <SoftTypography variant="h6" color="secondary" fontWeight="medium">
                        Invoice no
                      </SoftTypography>
                      <SoftTypography variant="h5" fontWeight="medium">
                        #0453119
                      </SoftTypography>
                    </Grid>
                    <Grid item xs={12} md={7} lg={5}>
                      <SoftBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 3, md: 0 }}
                      >
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" color="secondary" fontWeight="medium">
                            Invoice date:
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" fontWeight="medium">
                            06/03/2019
                          </SoftTypography>
                        </SoftBox>
                      </SoftBox>
                      <SoftBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" color="secondary" fontWeight="medium">
                            Due date:
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" fontWeight="medium">
                            11/03/2019
                          </SoftTypography>
                        </SoftBox>
                      </SoftBox>
                    </Grid>
                  </Grid>
                </SoftBox>
              </SoftBox>

              {/* Invoice table */}
              <SoftBox p={3}>
                <SoftBox width="100%" overflow="auto">
                  <Table sx={{ minWidth: "32rem" }}>
                    <SoftBox component="thead">
                      <TableRow>
                        <SoftBox
                          component="th"
                          width={{ xs: "45%", md: "50%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h6" color="text" fontWeight="medium">
                            Item
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h6" color="text" fontWeight="medium">
                            Qty
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h6" color="text" fontWeight="medium">
                            Rate
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h6" color="text" fontWeight="medium">
                            Amount
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                    </SoftBox>
                    <TableBody>
                      <TableRow>
                        <SoftBox component="td" textAlign="left" p={1} borderBottom={borderBottom}>
                          <SoftTypography variant="body2" color="text">
                            Premium Support
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            1
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            $ 9.00
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            $ 9.00
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                      <TableRow>
                        <SoftBox component="td" textAlign="left" p={1} borderBottom={borderBottom}>
                          <SoftTypography variant="body2" color="text">
                            Soft UI Design System PRO
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            3
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            $ 100.00
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            $ 300.00
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                      <TableRow>
                        <SoftBox component="td" textAlign="left" p={1}>
                          <SoftTypography variant="body2" color="text">
                            Parts for service
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <SoftTypography variant="body2" color="text">
                            1
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <SoftTypography variant="body2" color="text">
                            $ 89.00
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <SoftTypography variant="body2" color="text">
                            $ 89.00
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                      <TableRow>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          p={1}
                          borderBottom={borderBottom}
                        />
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        />
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h5">Total</SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h5">$ 698</SoftTypography>
                        </SoftBox>
                      </TableRow>
                    </TableBody>
                  </Table>
                </SoftBox>
              </SoftBox>

              {/* Invoice footer */}
              <SoftBox p={3} mt={7}>
                <Grid container>
                  <Grid item xs={12} lg={5}>
                    <SoftTypography variant="h5" fontWeight="medium">
                      Thank you!
                    </SoftTypography>
                    <SoftBox mt={1} mb={2} lineHeight={0}>
                      <SoftTypography variant="button" fontWeight="regular" color="secondary">
                        If you encounter any issues related to the invoice you can contact us at:
                      </SoftTypography>
                    </SoftBox>
                    <SoftTypography
                      component="span"
                      variant="h6"
                      fontWeight="medium"
                      color="secondary"
                    >
                      email:{" "}
                      <SoftTypography component="span" variant="h6" fontWeight="medium">
                        support@creative-tim.com
                      </SoftTypography>
                    </SoftTypography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <SoftBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <SoftButton
                        variant="gradient"
                        color="info"
                        onClick={() => window.print(this)}
                      >
                        print
                      </SoftButton>
                    </SoftBox>
                  </Grid>
                </Grid>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
    </BaseLayout>
  );
}

export default Invoice;
