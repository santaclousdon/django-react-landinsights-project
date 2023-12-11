import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-material.css"; // Theme

// https://ag-grid.com/react-data-grid/getting-started/

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
        let rows = this.props.rows;
        let columns = this.props.columns;

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
