import React, { Component } from "react";

import { MapboxMap, AGGrid, ToggleGroup } from "components";
import { Button, JSONRender } from "library";
import { ajax_wrapper, prettify_string } from "functions";

class OpenButton extends Component {
    render() {
        return (
            <Button href={`/home/?filter=${this.props.data["id"]}`} type="gradient-secondary">
                <i class="fa fa-search"></i> Open Filter
            </Button>
        );
    }
}

class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        ajax_wrapper("DELETE", `/api/filters/${this.props.data["id"]}`, {}, this.props.data.refresh_data);
    }

    render() {
        return (
            <Button onClick={this.delete} type="gradient-danger">
                Delete
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

        this.refresh_data = this.refresh_data.bind(this);
    }

    componentDidMount() {
        this.refresh_data();
    }

    refresh_data() {
        ajax_wrapper("GET", "/api/filters/", {}, (value) => this.setState({ filters: value }));
    }

    render() {
        let rows = this.state.filters;
        for (let item of rows) {
            item["refresh_data"] = this.refresh_data;
        }

        let columns = [
            { field: "name", filter: true },
            { field: "data", cellRenderer: JSONRender, autoHeight: true },
            { field: "Open", cellRenderer: OpenButton },
            { field: "Delete?", cellRenderer: DeleteButton },
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
