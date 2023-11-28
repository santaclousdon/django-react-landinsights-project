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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftAvatar from "components/SoftAvatar";

function TeamProfileCard({ color, title, description, industry, rating, members, dropdown }) {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  const renderMembers = members.map(({ image, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <SoftAvatar
        src={image}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          ml: -1.25,
          border: `${borderWidth[2]} solid ${white.main}`,
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
      <SoftBox p={3}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <SoftTypography
            variant="h5"
            fontWeight="medium"
            color={color}
            textTransform="capitalize"
            textGradient
          >
            {title}
          </SoftTypography>
          {dropdown && (
            <SoftTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                width: "16px",
                cursor: "pointer",
              }}
            >
              <Icon fontSize="default">more_vert</Icon>
            </SoftTypography>
          )}
          {dropdown.menu}
        </SoftBox>
        <SoftBox mb={2}>
          <SoftTypography variant="body2" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {industry ? (
            <SoftBox component="li" display="flex" flexDirection="column">
              <SoftBox display="flex" justifyContent="space-between" alignItems="center">
                <SoftTypography variant="body2" color="text">
                  Industry:
                </SoftTypography>
                <SoftBadge
                  variant="contained"
                  color="secondary"
                  size="md"
                  badgeContent={industry}
                  container
                />
              </SoftBox>
              <Divider />
            </SoftBox>
          ) : null}
          {rating ? (
            <SoftBox component="li" display="flex" flexDirection="column">
              <SoftBox display="flex" justifyContent="space-between" alignItems="center">
                <SoftTypography variant="body2" color="text">
                  Rating:
                </SoftTypography>
                <SoftBox
                  sx={({ functions: { pxToRem }, palette: { text } }) => ({
                    fontSize: pxToRem(24),
                    lineHeight: 0,
                    color: text.main,
                  })}
                >
                  {ratings[rating]}
                </SoftBox>
              </SoftBox>
              <Divider />
            </SoftBox>
          ) : null}
          {members ? (
            <SoftBox
              component="li"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <SoftTypography variant="body2" color="text">
                Members:
              </SoftTypography>
              <SoftBox display="flex">{renderMembers}</SoftBox>
            </SoftBox>
          ) : null}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of TeamProfileCard
TeamProfileCard.defaultProps = {
  color: "info",
  industry: "",
  rating: 0,
  members: [],
  dropdown: false,
};

// Typechecking props for the TeamProfileCard
TeamProfileCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  industry: PropTypes.string,
  rating: PropTypes.number,
  members: PropTypes.arrayOf(PropTypes.object),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default TeamProfileCard;
