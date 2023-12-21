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
    return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",1)";
}

function get_feature_bounds(geometry) {
    let min = [10000, 10000];
    let max = [-10000, -10000];

    for (let group of geometry["coordinates"]) {
        for (let section of group) {
            if (isNaN(section[0])) {
                for (let point of section) {
                    compare_points(min, max, point);
                }
            } else {
                compare_points(min, max, section);
            }
        }
    }

    return [min, max];
}

function compare_points(min, max, point) {
    if (point[0] < min[0]) {
        min[0] = point[0];
    }
    if (point[1] < min[1]) {
        min[1] = point[1];
    }
    if (point[0] > max[0]) {
        max[0] = point[0];
    }
    if (point[1] > max[1]) {
        max[1] = point[1];
    }
}

function is_inside_bounds(map_bounds, bounds) {
    if (bounds[0][0] < map_bounds._sw[0]) {
        return false;
    }
    if (bounds[0][1] < map_bounds._sw[1]) {
        return false;
    }
    if (bounds[1][0] > map_bounds._ne[0]) {
        return false;
    }
    if (bounds[1][1] > map_bounds._ne[1]) {
        return false;
    }

    return true;
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
            current_layers: [],
        };

        this.mapContainer = React.createRef();

        this.check_data = this.check_data.bind(this);
        this.add_polygon = this.add_polygon.bind(this);

        this.add_tiles = this.add_tiles.bind(this);
        this.source_loaded_on_map = this.source_loaded_on_map.bind(this);
        this.add_heatmap_data_to_source = this.add_heatmap_data_to_source.bind(this);
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
            minZoom: 7,
            maxZoom: 10,
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

    componentDidUpdate(prevProps) {
        if (this.props.data_timestamp != prevProps.data_timestamp) {
            this.check_data();
        }
    }

    check_data() {
        if (!this.state.loaded) {
            return false;
        }

        this.add_tiles();
        /*
        if (this.props.data && this.props.data["features"]) {
            for (let id of this.state.current_layers) {
                this.state.map_object.removeSource(id);
                this.state.map_object.removeLayer(id);
                this.state.map_object.removeLayer(`${id}_outline`);
            }

            let current_layers = [];
            for (let item of this.props.data["features"]) {
                let id_string = `custom_geolayer_${item["properties"]["id"]}`;
                this.add_polygon(id_string, item);
                current_layers.push(id_string);
            }

            this.setState({ current_layers: current_layers });
        }
        */
    }

    add_tiles() {
        let map = this.state.map_object;

        let source = map.getSource("statesData");
        if (source) {
            return false;
        }

        let min_value = 0;
        let max_value = 255;

        map.addSource("statesData", {
            type: "vector",
            tiles: ["https://api.maptiler.com/tiles/countries/{z}/{x}/{y}.pbf?key=wvQLiejVxw9aoANaJwCr"],
        });

        // add maptiler layer
        map.addLayer({
            id: "zip-codes-borders",
            type: "line",
            source: "statesData",
            "source-layer": "postal", // Replace with the correct source layer name
            layout: {},
            paint: {
                "line-color": "#1F51FF", // blue color
                "line-width": 2, // Set the width of the border

                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["feature-state", "value"], // Replace with your chosen metric
                    min_value,
                    "#FF0000", // Define the range and corresponding colors
                    max_value,
                    "#00FF00",
                ],
            },
        });

        if (map.isSourceLoaded("statesData")) {
            this.add_heatmap_data_to_source();
        } else {
            map.on("sourcedata", this.source_loaded_on_map);
        }
    }

    source_loaded_on_map(e) {
        let map = this.state.map_object;

        if (e.sourceId === "statesData" && e.isSourceLoaded) {
            setTimeout(this.add_heatmap_data_to_source, 200);
            map.off("sourcedata", this.source_loaded_on_map);

            map.on("moveend", this.add_heatmap_data_to_source);
        }
    }

    // Join the data to coresponding features
    add_heatmap_data_to_source(e) {
        let map = this.state.map_object;

        var tiles = map.querySourceFeatures("statesData", {
            sourceLayer: "postal",
        });

        tiles.forEach(function (row) {
            //let bounds = get_feature_bounds(row["geometry"]);
            //let map_bounds = map.getBounds();
            //let visible_feature = is_inside_bounds(map_bounds, bounds);

            if (row.id) {
                let value = Math.random() * 255;
                console.log("Tile Color", value);

                map.setFeatureState(
                    {
                        source: "statesData",
                        sourceLayer: "postal",
                        id: row.id,
                    },
                    {
                        value: value,
                    }
                );
            }
        });
    }

    add_polygon(id, data) {
        let map = this.state.map_object;

        var color = random_rgba();

        let source = map.getSource(id);
        let source_state = {
            type: "geojson",
            data: data,
        };
        if (source) {
            source.setState(source_state);
        } else {
            map.addSource(id, source_state);
        }

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
