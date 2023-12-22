import React, { Component } from "react";

const BOOLEANS = [
    { text: "", value: "" },
    { text: "Yes", value: true },
    { text: "No", value: false },
];

class Select extends Component {
    static component_name = "Select";

    constructor(props) {
        super(props);
        this.state = { options: [] };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const selection = e.target.value;
        const new_state = {};
        new_state[this.props.name] = selection;

        this.props.set_form_state(new_state);
    };

    render() {
        var label = null;
        if (this.props.label) {
            var label = <label style={this.props.label_style}>{this.props.label}</label>;
        }

        // Check if default value should be used
        var value = this.props.value;
        if (value == "" || value == "undefined") {
            value = this.props.defaultoption;
        }

        const option_dict = this.props.options;
        const options = [];

        // Check if default is inside options and add it if not
        let found_default = null;
        let current_default = this.props.default_option;
        for (var index in option_dict) {
            if (option_dict[index].value === current_default) {
                found_default = option_dict[index];
            }
        }

        // Render Select Component
        if (!found_default && !this.props.no_blank_option) {
            let selected = {};
            if (this.props.multiple || !value) {
                selected = { selected: "selected" };
            }

            options.push(<option key={-1} value="" {...selected} />);
        }

        // Create JSX for select options
        for (var index in option_dict) {
            options.push(
                <option key={index} value={String(option_dict[index].value)}>
                    {option_dict[index].text}
                </option>
            );
        }

        return (
            <div className={`form-group multiselect ${this.props.className}`} style={this.props.style}>
                {label}
                <div>
                    <select className="form-control" name={this.props.name} onChange={this.handleChange} value={value}>
                        {options}
                    </select>
                </div>
            </div>
        );
    }
}

export default Select;
