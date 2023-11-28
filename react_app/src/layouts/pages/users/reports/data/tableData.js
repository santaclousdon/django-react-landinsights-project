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
import SoftBadgeDot from "components/SoftBadgeDot";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

const tableData = {
  columns: [
    { name: "name", align: "left" },
    { name: "function", align: "left" },
    { name: "review", align: "left" },
    { name: "email", align: "center" },
    { name: "employed", align: "center" },
    { name: "id", align: "center" },
  ],

  rows: [
    {
      name: [team2, "John Micheal"],
      function: "Manager",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positive" />
        </SoftBox>
      ),
      email: "john@user.com",
      employed: "23/04/18",
      id: "43431",
    },
    {
      name: [team3, "Alexa Liras"],
      function: "Programator",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positive" />
        </SoftBox>
      ),
      email: "alexa@user.com",
      employed: "11/01/19",
      id: "93021",
    },
    {
      name: [team1, "Laurent Perrier"],
      function: "Executive",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot color="dark" size="xs" badgeContent="neutral" />
        </SoftBox>
      ),
      email: "laurent@user.com",
      employed: "19/09/17",
      id: "10392",
    },
    {
      name: [team3, "Michael Levi"],
      function: "Backend Developer",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positive" />
        </SoftBox>
      ),
      email: "michael@user.com",
      employed: "24/12/08",
      id: "34002",
    },
    {
      name: [team2, "Richard Gran"],
      function: "Manager",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot color="error" size="xs" badgeContent="negative" />
        </SoftBox>
      ),
      email: "richard@user.com",
      employed: "04/10/21",
      id: "91879",
    },
    {
      name: [team3, "Miriam Eric"],
      function: "Programtor",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positive" />
        </SoftBox>
      ),
      email: "miriam@user.com",
      employed: "14/09/20",
      id: "23042",
    },
  ],
};

export default tableData;
