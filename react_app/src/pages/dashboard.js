import React, { Component } from "react";

import { MapboxMap, AGGrid, ToggleGroup } from "components";
import { Button } from "library";

import COUNTY_DATA from "../data/county_metrics.js";

class TrackButton extends Component {
    constructor(props) {
        super(props);

        this.track_market = this.track_market.bind(this);
    }

    track_market() {}

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
        this.state = { error: "" };
    }

    render() {
        let group_title_style = {
            display: "inline-block",
            marginRight: "30px",
        };

        let rows = COUNTY_DATA;

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
            { field: "id", cellRenderer: TrackButton },
        ];

        return (
            <div>
                <div className="card mb-5">
                    <div className="card-header">
                        <MapboxMap style={{ minHeight: "500px" }} />
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-7">
                                <div style={group_title_style}>
                                    <h6>Timeframe</h6>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <ToggleGroup options={["1 Months", "3 Months", "6 Months", "1 Year"]} />
                                </div>
                            </div>
                            <div className="col-5">
                                <div style={group_title_style}>
                                    <h6>Level</h6>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <ToggleGroup options={["State", "County", "ZIP", "TEST"]} />
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
