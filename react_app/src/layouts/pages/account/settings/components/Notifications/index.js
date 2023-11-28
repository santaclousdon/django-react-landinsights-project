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
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Setting pages components
import TableCell from "layouts/pages/account/settings/components/TableCell";

function Notifications() {
  return (
    <Card id="notifications">
      <SoftBox p={3} lineHeight={1}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5">Notifications</SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Choose how you receive notifications. These notification settings apply to the things
          you’re watching.
        </SoftTypography>
      </SoftBox>
      <SoftBox pb={3} px={3}>
        <SoftBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <SoftBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]}>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  Email
                </TableCell>
                <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  Push
                </TableCell>
                <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  SMS
                </TableCell>
              </TableRow>
            </SoftBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <SoftBox lineHeight={1.4}>
                    <SoftTypography display="block" variant="button" fontWeight="regular">
                      Mentions
                    </SoftTypography>
                    <SoftTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user mentions you in a comment
                    </SoftTypography>
                  </SoftBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <SoftBox lineHeight={1.4}>
                    <SoftTypography display="block" variant="button" fontWeight="regular">
                      Comments
                    </SoftTypography>
                    <SoftTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user comments your item.
                    </SoftTypography>
                  </SoftBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <SoftBox lineHeight={1.4}>
                    <SoftTypography display="block" variant="button" fontWeight="regular">
                      Follows
                    </SoftTypography>
                    <SoftTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user follows you.
                    </SoftTypography>
                  </SoftBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <SoftTypography
                    display="block"
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  >
                    Log in from a new device
                  </SoftTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Notifications;
