import React, { Component } from "react";

import { MapboxMap, AGGrid, ToggleGroup } from "components";
import { Button } from "library";
import { ajax_wrapper } from "functions";

class OpenButton extends Component {
    render() {
        return (
            <Button href="/" type="gradient-secondary">
                <i class="fa fa-search"></i> Open Filter
            </Button>
        );
    }
}

export default class SavedFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
            error: "",
        };
    }

    componentDidMount() {
        ajax_wrapper("GET", "/api/filters/", {}, (value) => this.setState({ filters: value }));
    }

    render() {
        let rows = [
            {
                state: "CO",
                type: "County",
                filter_name: "My First Filter",
                description: "{Some parsed JSON}",
                id: "1234",
            },
            {
                state: "CO",
                type: "County",
                filter_name: "My First Filter",
                description: "{Some parsed JSON}",
                id: "1234",
            },
        ];

        let columns = [
            { field: "state", filter: true },
            { field: "type", filter: true },
            { field: "filter_name", filter: true },
            { field: "description", filter: true },
            { field: "id", cellRenderer: OpenButton },
        ];

        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h5>Saved Filters</h5>
                        <p>Market data filters that you’ve saved in the past</p>
                    </div>
                    <div className="card-body">
                        <AGGrid rows={rows} columns={columns} />
                    </div>
                </div>
            </div>
        );
    }
}
