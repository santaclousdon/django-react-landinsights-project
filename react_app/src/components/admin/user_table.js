import React, { Component } from "react";

import { ajax_wrapper } from "functions";
import { Button } from "library";
import { AGGrid } from "components";
import { CellComp } from "ag-grid-community";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class DeleteButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
        };

        this.delete_user = this.delete_user.bind(this);
    }

    delete_user() {
        this.setState(
            {
                disabled: true,
            },
            function () {
                ajax_wrapper("DELETE", `/api/users/${this.props.id}/`, {}, this.props.refresh_users);
            }.bind(this)
        );
    }

    render() {
        let disabled = this.state.disabled;

        return (
            <Button onClick={this.delete_user} type="gradient-danger" disabled={disabled}>
                <i class="fa fa-minus"></i> Remove
            </Button>
        );
    }
}

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.handle_click = this.handle_click.bind(this);
    }

    handle_click(event) {
        let data = {};
        data[this.props.colDef["field"]] = !this.props.value;

        this.props.handle_click(this.props.data["id"], data);
    }

    render() {
        let extra_class = "";
        if (this.props.value) {
            extra_class = " ag-checked";
        }
        return (
            <div
                onClick={this.handle_click}
                class={`ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper ${extra_class}`}
            >
                <input class="ag-input-field-input ag-checkbox-input" type="checkbox" />
            </div>
        );
    }
}

export default class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.handle_click = this.handle_click.bind(this);
    }

    handle_click(id, data) {
        ajax_wrapper("POST", `/api/users/${id}/`, data, this.props.refresh_users);
    }

    render() {
        let columns = [
            { field: "email", filter: true },
            { field: "company", filter: true },
            {
                field: "lia_member",
                filter: true,
                cellRenderer: Checkbox,
                cellRendererParams: {
                    handle_click: this.handle_click,
                },
            },
            {
                field: "beta",
                filter: true,
                cellRenderer: Checkbox,
                cellRendererParams: {
                    handle_click: this.handle_click,
                },
            },
            { field: "last_login", filter: true },
            { field: "created_at", filter: true },
            {
                field: "id",
                cellRenderer: DeleteButton,
                cellRendererParams: {
                    refresh_users: this.refresh_users,
                },
            },
        ];
        return (
            <div className="card mb-5">
                <div className="card-header">
                    <h6>{`All Users`}</h6>
                </div>
                <div className="card-body">
                    <AGGrid selectionChanged={this.handle_check_click} rows={this.props.users} columns={columns} />
                </div>
            </div>
        );
    }
}
