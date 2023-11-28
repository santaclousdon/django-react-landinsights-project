/* eslint-disable no-console */
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

import { useEffect, useRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// threejs components
import * as THREE from "three";
import { OrbitControls } from "@three-ts/orbit-controls";

import SoftBox from "components/SoftBox";

function Globe({ canvasStyle, ...rest }) {
  const globeRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    function createGlobe() {
      const container = globeRef.current;
      const canvas = canvasRef.current;

      const globeRadius = 100;
      const globeWidth = 4098 / 2;
      const globeHeight = 1968 / 2;

      function convertFlatCoordsToSphereCoords(x, y) {
        let latitude = ((x - globeWidth) / globeWidth) * -180;
        let longitude = ((y - globeHeight) / globeHeight) * -90;
        latitude = (latitude * Math.PI) / 180;
        longitude = (longitude * Math.PI) / 180;
        const radius = Math.cos(longitude) * globeRadius;

        return {
          x: Math.cos(latitude) * radius,
          y: Math.sin(longitude) * globeRadius,
          z: Math.sin(latitude) * radius,
        };
      }

      function makeMagic(points) {
        const { width, height } = container.getBoundingClientRect();

        // 1. Setup scene
        const scene = new THREE.Scene();
        // 2. Setup camera
        const camera = new THREE.PerspectiveCamera(45, width / height);
        // 3. Setup renderer
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
        });
        renderer.setSize(width, height);
        // 4. Add points to canvas
        // - Single geometry to contain all points.
        const mergedGeometry = new THREE.Geometry();
        // - Material that the dots will be made of.
        const pointGeometry = new THREE.SphereGeometry(0.5, 1, 1);
        const pointMaterial = new THREE.MeshBasicMaterial({
          color: "#989db5",
        });

        // eslint-disable-next-line no-restricted-syntax
        for (const point of points) {
          const { x, y, z } = convertFlatCoordsToSphereCoords(point.x, point.y, width, height);

          if (x && y && z) {
            pointGeometry.translate(x, y, z);
            mergedGeometry.merge(pointGeometry);
            pointGeometry.translate(-x, -y, -z);
          }
        }

        const globeShape = new THREE.Mesh(mergedGeometry, pointMaterial);
        scene.add(globeShape);

        container.classList.add("peekaboo");

        // Setup orbital controls
        camera.orbitControls = new OrbitControls(camera, canvas);
        camera.orbitControls.enableKeys = false;
        camera.orbitControls.enablePan = false;
        camera.orbitControls.enableZoom = false;
        camera.orbitControls.enableDamping = false;
        camera.orbitControls.enableRotate = true;
        camera.orbitControls.autoRotate = true;
        camera.position.z = -265;

        function animate() {
          // orbitControls.autoRotate is enabled so orbitControls.update
          // must be called inside animation loop.
          camera.orbitControls.update();
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }
        animate();
      }

      function hasWebGL() {
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl && gl instanceof WebGLRenderingContext) {
          return true;
        }
        return false;
      }

      function init() {
        if (hasWebGL()) {
          window
            .fetch(
              "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json"
            )
            .then((response) => response.json())
            .then((data) => makeMagic(data.points));
        }
      }

      return navigator.onLine
        ? init()
        : console.error(
            "Globe component can't load its data, please make sure that you're connected to the internet."
          );
    }

    createGlobe();
  }, []);

  return (
    <SoftBox ref={globeRef} {...rest}>
      <canvas
        ref={canvasRef}
        width="700"
        height="600"
        style={{ outline: "none", ...canvasStyle }}
      />
    </SoftBox>
  );
}

// Setting default values for the props for Globe
Globe.defaultProps = {
  canvasStyle: {},
};

// Typechecking props for the Globe
Globe.propTypes = {
  canvasStyle: PropTypes.objectOf(PropTypes.any),
};

export default Globe;
