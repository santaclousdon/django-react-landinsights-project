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
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";

function EventCard({ id, image, title, dateTime, description, members, action }) {
  const renderMembers = members.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <SoftAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          ml: -1.25,
          cursor: "pointer",
          position: "relative",

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card>
      <SoftBox p={2}>
        <SoftBox display="flex" alignItems="center">
          <SoftAvatar src={image} alt={title} size="lg" variant="rounded" />
          <SoftBox ml={1} lineHeight={0}>
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {title}
            </SoftTypography>
            {dateTime ? (
              <SoftTypography
                variant="caption"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                {dateTime}
              </SoftTypography>
            ) : null}
          </SoftBox>
        </SoftBox>
        <SoftBox my={2}>
          <SoftTypography variant="body2" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        {id ? (
          <SoftBox>
            <SoftTypography component="span" variant="body2" fontWeight="bold" color="text">
              Meeting ID:&nbsp;
            </SoftTypography>
            <SoftTypography component="span" variant="body2" color="text">
              {id}
            </SoftTypography>
          </SoftBox>
        ) : null}
        <Divider />
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <SoftButton
              component={Link}
              to={action.route}
              variant="gradient"
              color={action.color}
              size="small"
            >
              {action.label}
            </SoftButton>
          ) : (
            <SoftButton
              component="a"
              href={action.route}
              variant="gradient"
              color={action.color}
              size="small"
            >
              {action.label}
            </SoftButton>
          )}
          <SoftBox display="flex">{renderMembers}</SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of EventCard
EventCard.defaultProps = {
  id: "",
  dateTime: "",
  members: [],
};

// Typechecking props for the EventCard
EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
