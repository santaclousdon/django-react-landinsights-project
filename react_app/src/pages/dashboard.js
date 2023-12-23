import React, { Component } from "react";
import { useOutletContext } from "react-router-dom";

import { MapboxMap, AGGrid, ToggleGroup } from "components";
import { Button, Select } from "library";

import { ajax_wrapper, get_url } from "functions";

const ACRE_RANGES = ["2 to 100 Acres", "0.2 to 5 Acres", "5 to 10 Acres", "10 to 20 Acres", "..."];
const GEO_SCALES = ["State", "County", "ZIP"];

const UNWANTED_FIELDS = ["id", "gid", "name", "state"];

class TrackButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
        };

        this.check_markets = this.check_markets.bind(this);
        this.track_market = this.track_market.bind(this);
    }

    componentDidMount() {
        this.check_markets();
    }

    componentDidUpdate(prevProps) {
        if (this.props.markets != prevProps.markets) {
            this.check_markets();
        }
    }

    check_markets() {
        let my_market_id = null;
        for (let item of this.props.markets) {
            if (item["gid"] == this.props.value) {
                my_market_id = item["id"];
            }
        }

        this.setState({ id: my_market_id });
    }

    track_market() {
        if (this.state.id) {
            ajax_wrapper("DELETE", `/api/markets/${this.state.id}/`, {}, this.props.refresh_markets);
        } else {
            ajax_wrapper(
                "POST",
                "/api/markets/",
                {
                    company_id: window.secret_react_vars["user"]["company"],
                    type: this.props.type,
                    gid: this.props.value,
                },
                this.props.refresh_markets
            );
        }
    }

    render() {
        let button = (
            <Button onClick={this.track_market} type="gradient-secondary">
                <i class="fa fa-plus"></i> Add
            </Button>
        );
        if (this.state.id) {
            button = (
                <Button onClick={this.track_market} type="gradient-danger">
                    <i class="fa fa-minus"></i> Remove
                </Button>
            );
        }
        return button;
    }
}
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",

            map_filter_data: {
                geo_scale: GEO_SCALES[0],
                time_scale: ACRE_RANGES[0],
                visual_field: "1 acre-2 acre : Active",
            },
            region_data: [],
            markets: [],

            filter_data: {},
            filters_saved: false,

            data_timestamp: null,
        };

        this.refresh_markets = this.refresh_markets.bind(this);
        this.get_region_data = this.get_region_data.bind(this);
        this.change_scope = this.change_scope.bind(this);

        this.handle_filter_change = this.handle_filter_change.bind(this);
        this.save_filters = this.save_filters.bind(this);
    }

    componentDidMount() {
        this.refresh_markets();
        this.get_region_data();

        let params = get_url();
        if ("filter" in params) {
            ajax_wrapper("GET", `/api/filters/${params["filter"]}/`, {}, (value) =>
                this.setState({ filter_data: value["data"] })
            );
        }
    }

    refresh_markets() {
        ajax_wrapper("GET", "/api/markets/", {}, (value) => this.setState({ markets: value }));
    }

    get_region_data() {
        let data = Object.assign({}, this.state.map_filter_data);
        if (!data["geo_scale"] || !data["time_scale"]) {
            return false;
        }

        ajax_wrapper("POST", "/get_region_data/", data, (value) =>
            this.setState({ region_data: value, data_timestamp: Date.now() })
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
                this.get_region_data
            );
        }
    }

    handle_filter_change(data) {
        this.setState({
            filter_data: data,
            filters_saved: false,
        });
    }

    save_filters() {
        this.setState(
            { filters_saved: true },
            function () {
                ajax_wrapper(
                    "POST",
                    "/api/filters/",
                    {
                        company_id: window.secret_react_vars["user"]["company"],
                        data: this.state.filter_data,
                    },
                    function () { }
                );
            }.bind(this)
        );
    }

    render() {
        let group_title_style = {
            //display: "inline-block",
            marginRight: "30px",
        };

        let rows = this.state.region_data;

        let field_options = [];
        let map_color_data = {};
        if (this.props.saved_markets) {
            rows = this.state.markets;
        }

        if (rows.length > 0) {
            let test_row = rows[0];
            for (let key in test_row) {
                if (UNWANTED_FIELDS.includes(key)) {
                    continue;
                }

                for (let point in test_row[key]) {
                    field_options.push({
                        text: `${key} : ${point}`,
                        value: `${key} : ${point}`,
                    });
                }
            }
        }

        let visual_field_parts = this.state.map_filter_data["visual_field"].split(" : ");
        for (let item of rows) {
            let value = item[visual_field_parts[0]][visual_field_parts[1]];
            if (value > 0) {
                map_color_data[item["gid"]] = value;
            }
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
                    type: this.state.map_filter_data["geo_scale"],
                    refresh_markets: this.refresh_markets,
                },
            },
        ];
        if (this.props.saved_markets) {
            columns = [
                { field: "company", filter: true },
                { field: "name", filter: true },
                { field: "type", filter: true },
                { field: "gid", filter: true },
                {
                    field: "gid",
                    cellRenderer: TrackButton,
                    cellRendererParams: {
                        markets: this.state.markets,
                        refresh_markets: this.refresh_markets,
                    },
                },
            ];
        }

        let save_filters_button = (
            <Button onClick={this.save_filters} type="gradient-secondary">
                {"Save Filter"}
            </Button>
        );
        if (this.state.filters_saved) {
            save_filters_button = (
                <Button type="gradient-secondary" disabled={true}>
                    {"Filter Saved!"}
                </Button>
            );
        }

        return (
            <div>

                <div className="card mb-5">

                    <div className="card-body">

                        <div className="row justify-content-center mb-5">
                            <h4 class="text-center">Select The Acreage Range And Data Level You'd Like To See</h4>
                        </div>

                        <div className="row justify-content-center">

                            {/* Acreage Range Section */}
                            <div className="col-12 col-md-6">
                                <div className="d-flex flex-column align-items-center" style={group_title_style}>
                                    <h6 style={{ marginBottom: 0 }}>Acreage Range</h6>
                                    <div style={{ marginTop: '10px', width: '200px' }}>
                                        <Select
                                            options={
                                                ACRE_RANGES.map((item) => {
                                                    return { text: item, value: item };
                                                })
                                            }
                                            name="acre_range"
                                            value={"2 to 100 Acres"}
                                            set_form_state={(state) =>
                                                this.setState({})
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Level Section */}
                            <div className="col-12 col-md-6">
                                <div className="d-flex flex-column align-items-center" style={group_title_style}>
                                    <h6 style={{ marginBottom: 0 }}>Level</h6>
                                    <div style={{ marginTop: '10px' }}>
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
                </div>

                <div className="card mb-5">
                    <div className="card-header">
                        <MapboxMap
                            style={{ minHeight: "500px" }}
                            map_color_data={map_color_data}
                            data_timestamp={this.state.data_timestamp}
                            source_layer="administrative"
                        />
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="d-flex align-items-center"> {/* Flex container for inline alignment */}
                                    <div style={group_title_style}>
                                        <h6>Heatmap Based On:</h6>
                                    </div>
                                    <div style={{ marginLeft: '5px' }}> {/* Optional margin for spacing */}
                                        <Select
                                            options={field_options}
                                            name="visual_field"
                                            value={this.state.map_filter_data["visual_field"]}
                                            set_form_state={(state) =>
                                                this.setState({ map_filter_data: state, data_timestamp: Date.now() })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center">
                            <h6 class="text-center">*Filtered table regions will not be visualized on heatmap</h6>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div style={{ float: "right" }}>{save_filters_button}</div>
                        <h5>County Market Data</h5>
                        <p>Make the best market choices through our aggregated Redfin and Zillow dataset!</p>
                    </div>
                    <div className="card-body">
                        <AGGrid
                            rows={rows}
                            columns={columns}
                            handle_filter_change={this.handle_filter_change}
                            saved_filters={this.state.filter_data}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
