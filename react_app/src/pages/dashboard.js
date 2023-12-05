import React, { Component } from "react";

import { MapboxMap, AGGrid } from "components";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render() {
        return (
            <div>
                <div className="card mb-5">
                    <div className="card-header">
                        <MapboxMap style={{ minHeight: "500px" }} />
                    </div>
                    <div className="card-body"></div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5>County Market Data</h5>
                        <p>Make the best market choices through our aggregated Redfin and Zillow dataset!</p>
                    </div>
                    <div className="card-body">
                        <AGGrid />
                    </div>
                </div>
            </div>
        );
    }
}
