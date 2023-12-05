import React from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
    "pk.eyJ1IjoicmVkc3RhZ2xhbmRjbyIsImEiOiJjbGZweWZ5cTExYTlmM3Fxemp3dmdnMHpoIn0.csOCrB3RQ6Fa9B8ZztLQRw";

// https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
// https://github.com/mapbox/mapbox-react-examples/tree/master/data-overlay

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lng: -70.9,
            lat: 42.35,
            zoom: 9,
        };

        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });

        map.on("move", () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            });
        });
    }

    render() {
        return (
            <div style={this.props.container_style}>
                {/*<div className="map-data-sidebar">
                    Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
                </div> */}
                <div ref={this.mapContainer} className="map-container" style={this.props.style} />
            </div>
        );
    }
}
