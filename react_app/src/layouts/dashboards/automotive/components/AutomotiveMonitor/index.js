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

// react-leaflet map components
import { MapContainer, TileLayer } from "react-leaflet";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Hidden from "@mui/material/Hidden";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftAvatar from "components/SoftAvatar";

// Images
import curved10 from "assets/images/curved-images/curved10.jpg";
import spotifyLogo from "assets/images/small-logos/logo-spotify.svg";

function AutomotiveMonitor() {
  return (
    <SoftBox bgColor="dark" borderRadius="xl" position="relative" variant="gradient">
      <SoftBox p={3}>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={4}>
            <SoftInput
              size="large"
              icon={{ component: "search", direction: "left" }}
              placeholder="Search anything..."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} my="auto" ml="auto">
            <SoftBox display="flex" justifyContent="flex-end" alignItems="center">
              <SoftBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Headphones connected" placement="top" arrow>
                  <Icon fontSize="default">headphones</Icon>
                </Tooltip>
              </SoftBox>
              <SoftBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Music is playing" placement="top" arrow>
                  <Icon fontSize="large">play_arrow</Icon>
                </Tooltip>
              </SoftBox>
              <SoftBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Start radio" placement="top" arrow>
                  <Icon fontSize="default">power_settings_new</Icon>
                </Tooltip>
              </SoftBox>
              <SoftBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Time tracker" placement="top" arrow>
                  <Icon fontSize="default">timer</Icon>
                </Tooltip>
              </SoftBox>
              <SoftBox ml={{ xs: 1.5, sm: 3 }}>
                <SoftTypography variant="h4" color="white">
                  10:45
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
        <Divider light />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <SoftBox display="flex" alignItems="center" position="relative">
              <SoftTypography variant="h3" color="white" fontWeight="bold">
                11:13
              </SoftTypography>
              <SoftBox ml={2}>
                <SoftTypography variant="body2" color="white" opacity={0.8}>
                  Estimated arrival time
                </SoftTypography>
              </SoftBox>
              <Hidden smDown>
                <SoftBox ml="auto" height="2.5rem">
                  <Divider orientation="vertical" light />
                </SoftBox>
              </Hidden>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SoftBox display="flex" justifyContent="center" alignItems="center" position="relative">
              <SoftBox ml={{ md: "auto" }}>
                <SoftTypography variant="h3" color="white" fontWeight="bold">
                  2.4
                  <SoftTypography variant="button" color="white" verticalAlign="top">
                    Km
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox ml={2} mr="auto">
                <SoftTypography variant="body2" color="white" opacity={0.8}>
                  Turn right in 2.4 miles
                </SoftTypography>
              </SoftBox>
              <Hidden mdDown>
                <SoftBox height="2.5rem">
                  <Divider orientation="vertical" light />
                </SoftBox>
              </Hidden>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SoftBox display="flex" alignItems="center" position="relative">
              <SoftBox ml={{ xs: 0, lg: "auto" }}>
                <SoftTypography variant="h3" color="white" fontWeight="bold">
                  6.3
                  <SoftTypography variant="button" color="white" verticalAlign="top">
                    Km
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox ml={2}>
                <SoftTypography variant="body2" color="white" opacity={0.8}>
                  Distance to Creative Tim
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox width="100%" height="16rem">
        <MapContainer
          center={[38.89, -77.03]}
          zoom={11}
          maxZoom={19}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
        </MapContainer>
      </SoftBox>
      <SoftBox p={3}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} lg={4}>
            <SoftBox display="flex" alignItems="center">
              <SoftBox position="relative">
                <SoftAvatar src={curved10} alt="kal" size="lg" />
                <SoftBox
                  component="img"
                  src={spotifyLogo}
                  alt="spotify logo"
                  position="absolute"
                  right={0}
                  bottom={-7}
                  width="60%"
                  mr={-2}
                />
              </SoftBox>
              <SoftBox px={2}>
                <SoftTypography component="p" variant="button" fontWeight="medium" color="white">
                  You&apos;re Mines Still (feat Drake)
                </SoftTypography>
                <SoftTypography
                  component="p"
                  variant="caption"
                  color="white"
                  opacity={0.8}
                  gutterBottom
                >
                  Yung Bleu - Hip-Hop
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SoftBox display="flex" alignItems="center" justifyContent="center">
              <SoftButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={{
                  mx: 1.5,

                  "& .material-icons": {
                    fontSize: "2rem",
                  },
                }}
              >
                <Icon>skip_previous</Icon>
              </SoftButton>
              <SoftButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={{
                  mx: 1.5,

                  "& .material-icons": {
                    fontSize: "2rem",
                  },
                }}
              >
                <Icon>pause</Icon>
              </SoftButton>
              <SoftButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={{
                  mx: 1.5,

                  "& .material-icons": {
                    fontSize: "2rem",
                  },
                }}
              >
                <Icon>skip_next</Icon>
              </SoftButton>
            </SoftBox>
          </Grid>
          <Grid item xs={8} md={6} lg={2}>
            <SoftBox mb={-2}>
              <SoftTypography variant="body2" color="white">
                Volume
              </SoftTypography>
              <Slider
                defaultValue={50}
                sx={{
                  py: 1.25,

                  "& .MuiSlider-rail": {
                    opacity: 1,
                  },
                }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={4} md={6} lg={1} sx={{ ml: "auto" }}>
            <SoftBox display="flex" alignItems="center">
              <SoftBox color="white" lineHeight={0}>
                <Tooltip title="Hide menu" placement="top" arrow>
                  <Icon fontSize="small">format_list_bulleted</Icon>
                </Tooltip>
              </SoftBox>
              <SoftBox color="white" lineHeight={0} ml={2}>
                <Tooltip title="Track messages" placement="top" arrow>
                  <Icon fontSize="small">mode_comment</Icon>
                </Tooltip>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default AutomotiveMonitor;
