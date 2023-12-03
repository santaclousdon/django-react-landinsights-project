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
                <div>
                    <MapboxMap style={{ minHeight: "500px" }} />
                </div>
                <div>
                    <AGGrid />
                </div>
            </div>
        );
    }
}
