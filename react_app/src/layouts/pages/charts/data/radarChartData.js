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

const radarChartData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [
    {
      label: "Student A",
      color: "dark",
      data: [65, 75, 70, 80, 60, 80],
      borderDash: [5, 5],
    },
    {
      label: "Student B",
      color: "info",
      data: [54, 65, 60, 70, 70, 75],
    },
  ],
};

export default radarChartData;
