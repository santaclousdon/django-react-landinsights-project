import React, { Component } from "react";

import { MapboxMap, AGGrid, ToggleGroup, Loading } from "components";
import { Button, Select, Form, TextInput, Modal, JSONRender } from "library";

import { ajax_wrapper, get_url } from "functions";

import { TIME_SCALES, ACRE_RANGES, GEO_SCALES } from "../constants";

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
            if (item["region"]["id"] == this.props.data["id"]) {
                my_market_id = item["id"];
            }
        }

        this.setState({
            id: my_market_id,
            disabled: false,
        });
    }

    track_market() {
        this.setState(
            {
                disabled: true,
            },
            function () {
                if (this.state.id) {
                    ajax_wrapper("DELETE", `/api/markets/${this.state.id}/`, {}, this.props.refresh_markets);
                } else {
                    ajax_wrapper(
                        "POST",
                        "/api/markets/",
                        {
                            company_id: window.secret_react_vars["user"]["company"],
                            region_id: this.props.data["id"],
                        },
                        this.props.refresh_markets
                    );
                }
            }.bind(this)
        );
    }

    render() {
        let disabled = this.state.disabled;

        let button = (
            <Button onClick={this.track_market} type="gradient-secondary" disabled={disabled}>
                <i class="fa fa-plus"></i> Add
            </Button>
        );
        if (this.state.id) {
            button = (
                <Button onClick={this.track_market} type="gradient-danger" disabled={disabled}>
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
                time_scale: TIME_SCALES[0],
                acre_range: Object.keys(ACRE_RANGES)[0],
                visual_field: "Active",
                table_rows: [],
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
        this.update_visuals = this.update_visuals.bind(this);

        this.handle_filter_change = this.handle_filter_change.bind(this);
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
        ajax_wrapper(
            "GET",
            "/api/markets/",
            {},
            function (value) {
                let table_rows = this.state.table_rows;
                if (this.props.saved_markets) {
                    table_rows = [];
                    for (let item of this.state.markets) {
                        table_rows.push({
                            company: item["company"],
                            name: item["region"]["name"],
                            type: item["region"]["type"],
                            gid: item["region"]["gid"],
                        });
                    }
                }
                this.setState({
                    markets: value,
                    table_rows: table_rows,
                });
            }.bind(this)
        );
    }

    get_region_data() {
        let data = Object.assign({}, this.state.map_filter_data);
        if (!data["geo_scale"] || !data["time_scale"]) {
            return false;
        }

        ajax_wrapper(
            "POST",
            "/get_region_data/",
            data,
            function (value) {
                let acrage_key = ACRE_RANGES[this.state.map_filter_data["acre_range"]];
                let table_rows = this.state.table_rows;

                if (!this.props.saved_markets) {
                    table_rows = [];
                    for (let item of value) {
                        table_rows.push({
                            id: item["id"],
                            gid: item["gid"],
                            name: item["name"],
                            state: item["state"],
                            ...item[acrage_key],
                        });
                    }
                }

                this.setState({
                    region_data: value,
                    data_timestamp: Date.now(),
                    table_rows: table_rows,
                    loaded: true,
                });
            }.bind(this)
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

    update_visuals(state) {
        let new_filter_data = Object.assign(this.state.map_filter_data, state);
        this.setState({
            map_filter_data: new_filter_data,
            data_timestamp: Date.now(),
        });
    }

    handle_filter_change(data) {
        this.setState({
            filter_data: data,
            filters_saved: false,
        });
    }

    render() {
        let group_title_style = {
            //display: "inline-block",
            marginRight: "30px",
        };

        let region_data_lookup = {};
        for (let item of this.state.region_data) {
            region_data_lookup[item["id"]] = item;
        }

        let acrage_key = ACRE_RANGES[this.state.map_filter_data["acre_range"]];
        let field_key = this.state.map_filter_data["visual_field"];

        let map_region_input = this.state.region_data;
        if (this.props.saved_markets) {
            map_region_input = [];
            for (let item of this.state.markets) {
                if (item["region"]["id"] in region_data_lookup) {
                    map_region_input.push(region_data_lookup[item["region"]["id"]]);
                }
            }
        }

        let field_options = [];
        let map_color_data = {};
        let map_lookup_data = {};

        if (map_region_input.length > 0) {
            let test_row = map_region_input[0];
            for (let key in test_row) {
                if (key != acrage_key) {
                    continue;
                }
                if (UNWANTED_FIELDS.includes(key)) {
                    continue;
                }

                for (let point in test_row[key]) {
                    field_options.push({
                        text: `${point}`,
                        value: `${point}`,
                    });
                }
            }
        }


        let data_point_names = window.secret_react_vars["user"]['data_point_preferences'];
        for (let item of map_region_input) {
            map_lookup_data[item['gid']] = {
                'name': item['name'],
                'state': item['state'],
            };
            for (let key of data_point_names) {
                map_lookup_data[item['gid']][key] = item[acrage_key][key];
            }

            let value = item[acrage_key][field_key];
            if (value > 0) {
                map_color_data[item["gid"]] = value;
            }
        }

        let columns = [
            { field: "state", filter: true },
            { field: "name", filter: true },
            { field: "Pending STR", filter: true },
            { field: "1mo STR", filter: true },
            { field: "3mo STR", filter: true },
            { field: "6mo STR", filter: true },
            { field: "1yr STR", filter: true },
            { field: "Sold: 1mo", filter: true },
            { field: "Sold: 3mo", filter: true },
            { field: "Sold: 6mo", filter: true },
            { field: "Sold: 1yr", filter: true },
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
                    field: "id",
                    cellRenderer: TrackButton,
                    cellRendererParams: {
                        markets: this.state.markets,
                        refresh_markets: this.refresh_markets,
                    },
                },
            ];
        }

        let save_filters_button = (
            <Button
                onClick={(e) =>
                    this.setState({
                        saving_filter: {
                            company_id: window.secret_react_vars["user"]["company"],
                            data: this.state.filter_data,
                        },
                    })
                }
                type="gradient-secondary"
            >
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

        let filter_modal = null;
        if (this.state.saving_filter) {
            filter_modal = (
                <Modal show={true} on_hide={() => this.setState({ saving_filter: null })}>
                    <div>
                        <div>Filter Details:</div>
                        <div>
                            <JSONRender value={this.state.saving_filter.data} />
                        </div>
                    </div>
                    <Form
                        submit_url="/api/filters/"
                        defaults={this.state.saving_filter}
                        submit_success={(value) => this.setState({ saving_filter: null, filters_saved: true })}
                    >
                        <TextInput name="name" label="Filter Name" />
                    </Form>
                </Modal>
            );
        }

        return (
            <div>
                <Loading loaded={this.state.loaded} />
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
                                    <div style={{ marginTop: "10px", width: "200px" }}>
                                        <Select
                                            options={Object.keys(ACRE_RANGES).map((item) => {
                                                return { text: item, value: item };
                                            })}
                                            name="acre_range"
                                            value={this.state.map_filter_data["acre_range"]}
                                            set_form_state={this.update_visuals}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Level Section */}
                            <div className="col-12 col-md-6">
                                <div className="d-flex flex-column align-items-center" style={group_title_style}>
                                    <h6 style={{ marginBottom: 0 }}>Level</h6>
                                    <div style={{ marginTop: "10px" }}>
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
                            source_layer="administrative"
                            style={{ minHeight: "500px" }}

                            map_lookup_data={map_lookup_data}
                            map_color_data={map_color_data}
                            data_timestamp={this.state.data_timestamp}

                        />
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="d-flex align-items-center">
                                    {" "}
                                    {/* Flex container for inline alignment */}
                                    <div style={group_title_style}>
                                        <h6>Heatmap Based On:</h6>
                                    </div>
                                    <div style={{ marginLeft: "5px" }}>
                                        {" "}
                                        {/* Optional margin for spacing */}
                                        <Select
                                            options={field_options}
                                            name="visual_field"
                                            value={this.state.map_filter_data["visual_field"]}
                                            set_form_state={this.update_visuals}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <h6 class="text-center">*Filtered regions will not be visualized on heatmap</h6>
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
                            rows={this.state.table_rows}
                            columns={columns}
                            handle_filter_change={this.handle_filter_change}
                            saved_filters={this.state.filter_data}
                        />
                    </div>
                </div>

                <div>{filter_modal}</div>
            </div>
        );
    }
}
