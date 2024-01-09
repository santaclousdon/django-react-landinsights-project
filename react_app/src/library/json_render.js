import React, { Component } from "react";

import { prettify_string } from "functions";

export default class JSONRender extends Component {
    render() {
        let fields = [];
        for (let key in this.props.value) {
            let item = this.props.value[key];
            fields.push(
                <div>{`${prettify_string(key)}: ${item["filterType"]} ${item["type"]} ${item["filter"]}`}</div>
            );
        }
        return <div>{fields}</div>;
    }
}
