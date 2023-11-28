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
import SoftTypography from "components/SoftTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: "devices_other",
    name: "الأجهزة",
    description: (
      <>
        250 في المخزن,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          346+ تم البيع
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "settings",
    name: "تذاكر",
    description: (
      <>
        123 مغلق,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          15 افتح
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "info",
    name: "سجلات الخطأ",
    description: (
      <>
        1 is نشيط,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          40 مغلق
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "thumb_up",
    name: "المستخدمين السعداء",
    description: (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </SoftTypography>
    ),
    route: "/",
  },
];

export default categoriesListData;
