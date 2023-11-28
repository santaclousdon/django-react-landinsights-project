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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          نظرة عامة على الطلبات
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="medium">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="bold">
              24%
            </SoftTypography>{" "}
            هذا الشهر
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, تغييرات في التصميم"
          dateTime="22 ديسمبر 7:20 مساءً"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="طلب جديد # 1832412"
          dateTime="21 ديسمبر 11 م"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="مدفوعات الخادم لشهر أبريل"
          dateTime="21 ديسمبر 9:34 مساءً"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="تمت إضافة بطاقة جديدة للأمر رقم 4395133"
          dateTime="20 ديسمبر 2:20 صباحًا"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="فتح الحزم من أجل التطوير"
          dateTime="18 ديسمبر ، 4:54 صباحًا"
        />
        <TimelineItem color="dark" icon="paid" title="طلب جديد # 9583120" dateTime="17 ديسمبر" />
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
