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

// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Images
import image1 from "assets/images/ecommerce/wooden-table.jpeg";
import image2 from "assets/images/ecommerce/chair-pink.jpeg";
import image3 from "assets/images/ecommerce/black-chair.jpeg";
import image4 from "assets/images/ecommerce/chair-steel.jpeg";
import image5 from "assets/images/ecommerce/chair-wood.jpeg";

function ProductImages() {
  const [currentImage, setCurrentImage] = useState(image1);
  const [imgsViewer, setImgsViewer] = useState(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  const handleSetCurrentImage = ({ currentTarget }) => {
    setCurrentImage(currentTarget.src);
    setImgsViewerCurrent(Number(currentTarget.id));
  };

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  return (
    <SoftBox>
      <ImgsViewer
        imgs={[{ src: image1 }, { src: image2 }, { src: image3 }, { src: image4 }, { src: image5 }]}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
      />

      <SoftBox
        component="img"
        src={currentImage}
        alt="Product Image"
        shadow="lg"
        borderRadius="lg"
        width="100%"
        onClick={openImgsViewer}
      />
      <SoftBox mt={2} pt={1}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <SoftBox
              component="img"
              id={0}
              src={image1}
              alt="small image 1"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SoftBox
              component="img"
              id={1}
              src={image2}
              alt="small image 2"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SoftBox
              component="img"
              id={2}
              src={image3}
              alt="small image 3"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SoftBox
              component="img"
              id={3}
              src={image4}
              alt="small image 4"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SoftBox
              component="img"
              id={4}
              src={image5}
              alt="small image 5"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default ProductImages;
