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
            active: this.props.options[0],
        };
    }

    componentDidMount() {}

    render() {
        let options = this.props.options;

        let buttons = [];
        for (let item of options) {
            buttons.push(
                <ToggleButton
                    name={item}
                    current={this.state.active}
                    set_active={(name) => this.setState({ active: name })}
                />
            );
        }

        return (
            <div class="btn-group" role="group">
                {buttons}
            </div>
        );
    }
}
