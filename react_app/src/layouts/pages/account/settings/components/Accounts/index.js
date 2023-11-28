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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Images
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoAsana from "assets/images/small-logos/logo-asana.svg";

function Accounts() {
  const [slack2FA, setSlack2FA] = useState(true);
  const [spotify2FA, setSpotify2FA] = useState(true);
  const [atlassian2FA, setAtlassian2FA] = useState(true);
  const [asana2FA, setAsana2FA] = useState(false);

  const handleSetSlack2FA = () => setSlack2FA(!slack2FA);
  const handleSetSpotify2FA = () => setSpotify2FA(!spotify2FA);
  const handleSetAtlassian2FA = () => setAtlassian2FA(!atlassian2FA);
  const handleSetAsana2FA = () => setAsana2FA(!asana2FA);

  return (
    <Card id="accounts">
      <SoftBox p={3} lineHeight={1}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5">Accounts</SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Here you can setup and manage your integration settings.
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={2} pb={3} px={3}>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <SoftBox display="flex" alignItems="center">
            <SoftAvatar src={logoSlack} alt="Slack logo" variant="rounded" />
            <SoftBox ml={2}>
              <SoftTypography variant="h5" fontWeight="medium">
                Slack
              </SoftTypography>
              <SoftBox display="flex" alignItems="flex-end">
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  Show less
                </SoftTypography>
                <SoftTypography variant="button" color="text" sx={{ lineHeight: 0 }}>
                  <Icon fontSize="small">expand_less</Icon>
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </SoftBox>
          <SoftBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <SoftBox lineHeight={0} mx={2}>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                {slack2FA ? "Enabled" : "Disabled"}
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={1}>
              <Switch checked={slack2FA} onChange={handleSetSlack2FA} />
            </SoftBox>
          </SoftBox>
        </SoftBox>
        <SoftBox ml={2} pl={6} pt={2} lineHeight={1}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            You haven&apos;t added your Slack yet or you aren&apos;t authorized. Please add our
            Slack Bot to your account by clicking on here. When you&apos;ve added the bot, send your
            verification code that you have received.
          </SoftTypography>
          <SoftBox
            bgColor="grey-100"
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <SoftTypography variant="button" fontWeight="medium" color="text">
              Verification Code
            </SoftTypography>
            <SoftBox width={{ xs: "100%", sm: "25%", md: "15%" }} mt={{ xs: 1, sm: 0 }}>
              <Tooltip title="Copy" placement="top">
                <SoftInput size="small" value="1172913" />
              </Tooltip>
            </SoftBox>
          </SoftBox>
          <SoftBox
            bgColor="grey-100"
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <SoftTypography variant="button" fontWeight="medium" color="text">
              Connected account
            </SoftTypography>
            <SoftBox
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <SoftBox mr={2} mb={{ xs: 1, sm: 0 }} lineHeight={0}>
                <SoftTypography variant="button" fontWeight="medium">
                  hello@creative-tim.com
                </SoftTypography>
              </SoftBox>
              <SoftButton variant="gradient" color="error" size="small">
                delete
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
        <Divider />
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <SoftBox display="flex" alignItems="center">
            <SoftAvatar src={logoSpotify} alt="Slack logo" variant="rounded" />
            <SoftBox ml={2} lineHeight={0}>
              <SoftTypography variant="h5" fontWeight="medium">
                Spotify
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Music
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <SoftBox lineHeight={0} mx={2}>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                {spotify2FA ? "Enabled" : "Disabled"}
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={1}>
              <Switch checked={spotify2FA} onChange={handleSetSpotify2FA} />
            </SoftBox>
          </SoftBox>
        </SoftBox>
        <Divider />
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <SoftBox display="flex" alignItems="center">
            <SoftAvatar src={logoAtlassian} alt="Slack logo" variant="rounded" />
            <SoftBox ml={2} lineHeight={0}>
              <SoftTypography variant="h5" fontWeight="medium">
                Atlassian
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Payment vendor
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <SoftBox lineHeight={0} mx={2}>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                {atlassian2FA ? "Enabled" : "Disabled"}
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={1}>
              <Switch checked={atlassian2FA} onChange={handleSetAtlassian2FA} />
            </SoftBox>
          </SoftBox>
        </SoftBox>
        <Divider />
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <SoftBox display="flex" alignItems="center">
            <SoftAvatar src={logoAsana} alt="Slack logo" variant="rounded" />
            <SoftBox ml={2} lineHeight={0}>
              <SoftTypography variant="h5" fontWeight="medium">
                Asana
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Organize your team
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <SoftBox lineHeight={0} mx={2}>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                {asana2FA ? "Enabled" : "Disabled"}
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={1}>
              <Switch checked={asana2FA} onChange={handleSetAsana2FA} />
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Accounts;
