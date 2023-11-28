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

// react-router components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Custom styles for AnnouncementCard
// import style from "examples/Cards/AnnouncementCard/style";

function AnnouncementCard({ by, badge, title, description, value, action }) {
  // const classes = style();

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" p={2}>
        {by.image || by.name || by.date ? (
          <SoftBox display="flex" mr={2}>
            {by.image ? (
              <SoftAvatar src={by.image} alt={by.name} size="sm" variant="rounded" />
            ) : null}
            <SoftBox display="flex" flexDirection="column" justifyContent="center" ml={1}>
              {by.name ? (
                <SoftTypography variant="button" fontWeight="medium" textTransform="capitalize">
                  {by.name}
                </SoftTypography>
              ) : null}
              {by.date ? (
                <SoftTypography variant="caption" color="text">
                  {by.date}
                </SoftTypography>
              ) : null}
            </SoftBox>
          </SoftBox>
        ) : null}
        {badge.color && badge.label ? (
          <SoftBadge color={badge.color} badgeContent={badge.label} size="sm" container />
        ) : null}
      </SoftBox>
      <SoftBox pt={0.5} pb={2} px={2}>
        <SoftTypography variant="h6">{title}</SoftTypography>
        <SoftBox mt={1} mb={2} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox
          bgColor="grey-100"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="lg"
          p={2}
        >
          {value.amount ? (
            <SoftTypography variant="h4">
              {value.method ? (
                <SoftBox component="span" mr={0.5}>
                  <SoftTypography
                    variant="button"
                    color="secondary"
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    {value.type}
                  </SoftTypography>
                </SoftBox>
              ) : null}
              {value.amount}
              {value.method ? (
                <SoftBox component="span" ml={0.5}>
                  <SoftTypography
                    variant="button"
                    color="secondary"
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    / {value.method}
                  </SoftTypography>
                </SoftBox>
              ) : null}
            </SoftTypography>
          ) : (
            <SoftBox />
          )}
          {action.type === "internal" ? (
            <SoftButton component={Link} to={action.route} variant="outlined" color="dark">
              {action.label}
            </SoftButton>
          ) : (
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              color="dark"
            >
              {action.label}
            </SoftButton>
          )}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of AnnouncementCard
AnnouncementCard.defaultProps = {
  by: {},
  badge: {},
  value: {},
};

// Typechecking props for the AnnouncementCard
AnnouncementCard.propTypes = {
  by: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
  badge: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    method: PropTypes.string,
  }),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnnouncementCard;
