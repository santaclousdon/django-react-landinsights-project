import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-material.css"; // Theme

import { Button } from "library";

// https://ag-grid.com/react-data-grid/getting-started/

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
export default class AGGrid extends Component {
    
    constructor(props) {
        super(props);

        this.get_filters = this.get_filters.bind(this);
        this.gridRef = React.createRef();
    }

    componentDidMount() {}

    get_filters() {
        let current_filters = this.gridRef.current?.api.getFilterModel();
        console.log(current_filters);
    }

    render() {
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

        const gridOptions = {
            autoSizeStrategy: {
                type: "fitGridWidth",
                defaultMinWidth: 120,
            },
        };

        return (
            // Container
            <div className="ag-theme-material" style={{ height: 500 }}>
                {/* The AG Grid component */}
                <AgGridReact
                    ref={this.gridRef}
                    gridOptions={gridOptions}
                    pagination={true}
                    rowData={rows}
                    columnDefs={columns}
                />

                {/*<Button type="info" onClick={this.get_filters}>
                    Save Filters
                </Button>*/}
            </div>
        );
    }
}
