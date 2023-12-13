import React from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
    "pk.eyJ1IjoicmVkc3RhZ2xhbmRjbyIsImEiOiJjbGZweWZ5cTExYTlmM3Fxemp3dmdnMHpoIn0.csOCrB3RQ6Fa9B8ZztLQRw";

// https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
// https://github.com/mapbox/mapbox-react-examples/tree/master/data-overlay

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")";
}

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            lng: -70.9,
            lat: 42.35,
            zoom: 9,

            map_object: null,
        };

        this.mapContainer = React.createRef();

        this.check_data = this.check_data.bind(this);
        this.add_polygon = this.add_polygon.bind(this);
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

        map.on("load", () => {
            this.setState(
                {
                    loaded: true,
                },
                this.check_data
            );
        });

        this.setState({
            map_object: map,
        });
    }

    check_data() {
        if (!this.state.loaded) {
            return false;
        }

        if (this.props.data) {
            for (let item of this.props.data["features"]) {
                this.add_polygon(item["properties"]["NAME"], item);
            }
        }
    }

    add_polygon(id, data) {
        let map = this.state.map_object;

        var color = random_rgba();

        map.addSource(id, {
            type: "geojson",
            data: data,
        });

        // Add a new layer to visualize the polygon.
        map.addLayer({
            id: id,
            type: "fill",
            source: id, // reference the data source
            layout: {},
            paint: {
                "fill-color": color, // blue color fill
                "fill-opacity": 0.5,
            },
        });
        // Add a black outline around the polygon.
        map.addLayer({
            id: `${id}_outline`,
            type: "line",
            source: id,
            layout: {},
            paint: {
                "line-color": color,
                "line-width": 3,
            },
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
