import React, { Component } from "react";

import { ajax_wrapper } from "functions";
import { UsersChart, UsersTable } from "components";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);

        let users_by_month = {};
        for (let item of MONTHS) {
            users_by_month[item] = 0;
        }

        this.state = {
            error: "",
            loaded: false,

            users: [],
            users_by_month: users_by_month,
        };

        this.load_users = this.load_users.bind(this);
    }

    componentDidMount() {
        ajax_wrapper("GET", "/user/users/", {}, this.load_users);
    }

    load_users(value) {
        let users_by_month = this.state.users_by_month;

        for (let item of value["user_json"]) {
            let joined = new Date(item["created_at"]);
            let month_index = joined.getMonth();

            users_by_month[MONTHS[month_index]] += 1;
        }

        this.setState({
            users: value["user_json"],
            users_by_month: users_by_month,
        });
    }

    render() {
        return (
            <div>
                <UsersChart users={this.state.users} users_by_month={this.state.users_by_month} />
                <UsersTable users={this.state.users} users_by_month={this.state.users_by_month} />
            </div>
        );
    }
}
