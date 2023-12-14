import React, { Component } from "react";

import { Button } from "library";

class ToggleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "Messages",
        };
    }

    componentDidMount() {}

    get_filters() {
        let current_filters = this.gridRef.current?.api.getFilterModel();
        console.log(current_filters);
    }

    render() {
        let button_class = "default";
        if (this.props.current === this.props.name) {
            button_class = "gradient-info";
        }

        return (
            <Button type={button_class} onClick={() => this.props.set_active(this.props.name)}>
                {this.props.name}
            </Button>
        );
    }
}

export default class ToggleGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "",
        };

        this.on_change = this.on_change.bind(this);
    }

    componentDidMount() {
        this.on_change(this.props.options[0]);
    }

    on_change(name) {
        this.setState({ active: name });

        this.props.on_change(this.props.group_name, name);
    }

    render() {
        let options = this.props.options;

        let buttons = [];
        for (let item of options) {
            buttons.push(<ToggleButton name={item} current={this.state.active} set_active={this.on_change} />);
        }

        return (
            <div class="btn-group" role="group">
                {buttons}
            </div>
        );
    }
}
