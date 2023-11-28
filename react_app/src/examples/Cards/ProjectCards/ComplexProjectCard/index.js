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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Custom styles for ComplexProjectCard
function ComplexProjectCard({ color, image, title, dateTime, description, members, dropdown }) {
  const renderMembers = members.map((member, key) => {
    const memberKey = `member-${key}`;

    return (
      <SoftAvatar
        key={memberKey}
        src={member}
        alt="member profile"
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    );
  });

  return (
    <Card>
      <SoftBox p={2}>
        <SoftBox display="flex" alignItems="center">
          <SoftAvatar
            src={image}
            alt={title}
            size="xl"
            variant="rounded"
            bgColor={color}
            sx={{ p: 1 }}
          />
          <SoftBox ml={2} lineHeight={0}>
            <SoftBox mb={1} lineHeight={0}>
              <SoftTypography variant="h6" textTransform="capitalize" fontWeight="medium">
                {title}
              </SoftTypography>
            </SoftBox>
            {members.length > -1 ? <SoftBox display="flex">{renderMembers}</SoftBox> : null}
          </SoftBox>
          {dropdown && (
            <SoftTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                ml: "auto",
                alignSelf: "flex-start",
                py: 1.25,
              }}
            >
              <Icon fontSize="default" sx={{ cursor: "pointer" }}>
                more_vert
              </Icon>
            </SoftTypography>
          )}
          {dropdown.menu}
        </SoftBox>
        <SoftBox my={2} lineHeight={1}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        <Divider />
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          {members.length > -1 ? (
            <SoftBox display="flex" flexDirection="column" lineHeight={0}>
              <SoftTypography variant="button" fontWeight="medium">
                {members.length}
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="medium" color="secondary">
                Participants
              </SoftTypography>
            </SoftBox>
          ) : null}
          {dateTime ? (
            <SoftBox display="flex" flexDirection="column" lineHeight={0}>
              <SoftTypography variant="button" fontWeight="medium">
                {dateTime}
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="medium" color="secondary">
                Due date
              </SoftTypography>
            </SoftBox>
          ) : null}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of ComplexProjectCard
ComplexProjectCard.defaultProps = {
  color: "dark",
  dateTime: "",
  members: [],
  dropdown: false,
};

// Typechecking props for the ProfileInfoCard
ComplexProjectCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.string),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexProjectCard;
