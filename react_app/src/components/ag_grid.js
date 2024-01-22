import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-material.css"; // Theme

// https://ag-grid.com/react-data-grid/getting-started/

export default class AGGrid extends Component {
    constructor(props) {
        super(props);

        this.gridRef = React.createRef();

        this.load_saved_filters = this.load_saved_filters.bind(this);
        this.handle_filter_change = this.handle_filter_change.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps) {
        if (this.props.saved_filters != prevProps.saved_filters) {
            this.load_saved_filters();
        }
    }

    load_saved_filters() {
        if (this.props.saved_filters) {
            this.gridRef.current?.api.setFilterModel(this.props.saved_filters);
        }
    }

    handle_filter_change() {
        let current_filters = this.gridRef.current?.api.getFilterModel();
        console.log(current_filters);

        if (this.props.handle_filter_change) {
            this.props.handle_filter_change(current_filters);
        }
    }

    render() {
        let rows = this.props.rows;
        let columns = this.props.columns;

        const gridOptions = {
            autoSizeStrategy: {
                type: "fitCellContents",
            },
        };

        return (
            // Container
            <div className="ag-theme-material" style={{ height: 500 }}>
                {/* The AG Grid component */}
                <AgGridReact
                    ref={this.gridRef}
                    gridOptions={gridOptions}
                    pagination={false}
                    rowData={rows}
                    columnDefs={columns}
                    onFirstDataRendered={this.load_saved_filters}
                    onFilterChanged={this.handle_filter_change}
                    onCellClicked={this.props.onCellClicked}
                    selectionChanged={this.props.selectionChanged}
                />

                {/*<Button type="info" onClick={this.get_filters}>
                    Save Filters
                </Button>*/}
            </div>
        );
    }
}
