import React, { Component } from "react";

import { ajax_wrapper } from "functions";
import { Button } from "library";
import { AGGrid } from "components";

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
            <Button onClick={this.track_market} type="gradient-danger" disabled={disabled}>
                <i class="fa fa-minus"></i> Remove
            </Button>
        );
    }
}

export default class UsersTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let columns = [
            { field: "email", filter: true },
            { field: "company", filter: true },
            { field: "lia_member", filter: true },
            { field: "beta", filter: true },
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
                    <AGGrid rows={this.props.users} columns={columns} />
                </div>
            </div>
        );
    }
}
