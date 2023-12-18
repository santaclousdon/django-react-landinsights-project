import React, { Component } from "react";
import { useOutletContext } from "react-router-dom";

import { MapboxMap, AGGrid, ToggleGroup } from "components";
import { Button } from "library";

import COUNTY_DATA from "../data/county_metrics.js";
import { ajax_wrapper } from "functions/ajax.js";

const TIME_SCALES = ["1 Months", "3 Months", "6 Months", "1 Year"];
const GEO_SCALES = ["State", "County", "ZIP"];
class TrackButton extends Component {
    constructor(props) {
        super(props);

        this.track_market = this.track_market.bind(this);
    }

    track_market() {
        ajax_wrapper("POST", "/api/markets/", {
            company: window.secret_react_vars["company"],
            type: this.props.type,
            gid: this.props.value,
        });
    }

    render() {
        return (
            <Button onClick={this.track_market} type="gradient-secondary">
                <i class="fa fa-plus"></i> Add
            </Button>
        );
    }
}
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            map_filter_data: {
                geo_scale: GEO_SCALES[0],
                time_scale: TIME_SCALES[0],
            },
            map_regions: [],
            markets: [],
        };

        this.get_map_regions = this.get_map_regions.bind(this);
        this.change_scope = this.change_scope.bind(this);
    }

    componentDidMount() {
        this.get_map_regions();

        ajax_wrapper("GET", "/api/markets/", {}, (value) => this.setState({ markets: value }));
    }

    get_map_regions() {
        let data = Object.assign({}, this.state.map_filter_data);
        if (!data["geo_scale"] || !data["time_scale"]) {
            return false;
        }

        ajax_wrapper("POST", "/get_map_regions/", data, (value) =>
            this.setState({ map_regions: value, data_timestamp: Date.now() })
        );
    }

    change_scope(group, name) {
        let filter_data = this.state.map_filter_data;

        if (filter_data[group] != name) {
            filter_data[group] = name;
            this.setState(
                {
                    map_filter_data: filter_data,
                },
                this.get_map_regions
            );
        }
    }

    render() {
        let group_title_style = {
            display: "inline-block",
            marginRight: "30px",
        };

        let rows = COUNTY_DATA;
        if (this.props.saved_markets) {
            rows = this.state.markets;
        }

        let columns = [
            { field: "state", filter: true },
            { field: "county", filter: true },
            { field: "pending_ratio", filter: true },
            { field: "sales_ratio_30", filter: true },
            { field: "sales_ratio_90", filter: true },
            { field: "sales_ratio_180", filter: true },
            { field: "sales_ratio_360", filter: true },
            { field: "sold_30", filter: true },
            { field: "sold_60", filter: true },
            { field: "sold_90", filter: true },
            { field: "sold_180", filter: true },
            { field: "sold_360", filter: true },
            {
                field: "id",
                cellRenderer: TrackButton,
                cellRendererParams: {
                    markets: this.state.markets,
                },
            },
        ];

        return (
            <div>
                <div className="card mb-5">
                    <div className="card-header">
                        <MapboxMap
                            style={{ minHeight: "500px" }}
                            data={this.state.map_regions}
                            data_timestamp={this.state.data_timestamp}
                        />
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-7">
                                <div style={group_title_style}>
                                    <h6>Timeframe</h6>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <ToggleGroup
                                        group_name="time_scale"
                                        on_change={this.change_scope}
                                        options={TIME_SCALES}
                                    />
                                </div>
                            </div>
                            <div className="col-5">
                                <div style={group_title_style}>
                                    <h6>Level</h6>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <ToggleGroup
                                        group_name="geo_scale"
                                        on_change={this.change_scope}
                                        options={GEO_SCALES}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5>County Market Data</h5>
                        <p>Make the best market choices through our aggregated Redfin and Zillow dataset!</p>
                    </div>
                    <div className="card-body">
                        <AGGrid rows={rows} columns={columns} />
                    </div>
                </div>
            </div>
        );
    }
}
