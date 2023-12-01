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

// Copied from ./layouts/authentication/components/Footer

// @mui material components
import Grid from "@mui/material/Grid";

function Footer() {
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={10} lg={8}>
                    <div>
                        <div>
                            <div>Company</div>
                        </div>
                        <div>
                            <div>About Us</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
                    <div>Copyright &copy; 2023</div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
