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
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function DataTables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={6} pb={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={3} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SoftTypography>
            </SoftBox>
            <DataTable table={dataTableData} />
          </Card>
        </SoftBox>
        <Card>
          <SoftBox p={3} lineHeight={1}>
            <SoftTypography variant="h5" fontWeight="medium">
              Datatable Search
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </SoftTypography>
          </SoftBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
