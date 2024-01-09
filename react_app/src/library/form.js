import React, { Component } from "react";

import { get_children, get_all_children, is_valid_react_child } from "functions";

import { Alert, Button } from "library";
import { ajax_wrapper } from "functions";

class FormWithChildren extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form_child_update_key: null,
            required: [],

            defaults: {},
        };

        this.get_form_defaults = this.get_form_defaults.bind(this);

        this.handle_change_event = this.handle_change_event.bind(this);
        this.set_form_state = this.set_form_state.bind(this);

        this.reset_state_on_submit = this.reset_state_on_submit.bind(this);

        this.form_submit = this.form_submit.bind(this);
        this.form_submit_callback = this.form_submit_callback.bind(this);
        this.form_submit_failure = this.form_submit_failure.bind(this);

        this.handle_key_press = this.handle_key_press.bind(this);
    }

    componentDidMount() {
        const defaults = this.get_form_defaults();
        this.setState(defaults, this.set_global_state);
    }

    get_form_defaults(clean) {
        let defaults = JSON.parse(JSON.stringify(this.props.defaults || {}));
        const children = get_children(this.props);

        Object.keys(children).forEach((index) => {
            const child = children[index];
            if (child) {
                if (child.props && "default" in child.props) {
                    defaults[child.props.name] = child.props.default;
                } else if (clean) {
                    defaults[child.props.name] = undefined;
                }
            }
        });

        if (!("required" in defaults)) {
            defaults.required = "";
        }

        return defaults;
    }

    handle_change_event(e) {
        const newState = {};

        const name = e.target.getAttribute("name");
        newState[name] = e.target.value;

        this.set_form_state(newState);
    }

    set_form_state(state) {
        // Form validation here

        this.setState(state);
    }

    reset_state_on_submit() {
        const defaults = this.get_form_defaults(true);
        defaults.form_is_saving_right_now = false;

        // Reset key values for all children in order to fully clear states and rerender
        const date = Date.now();
        defaults.form_child_update_key = date;

        this.setState(defaults);
    }

    form_submit() {
        const data = { ...this.state };
        delete data.children;
        delete data.form_state;
        delete data.defaults;
        delete data.form_child_update_key;
        delete data.required;

        const new_state = {
            required: [],
            form_is_saving_right_now: true,
        };

        const children = get_children(this.props);
        const required = this.check_required_children([], children);

        if (required.length > 0) {
            new_state["required"] = required;
            this.setState(new_state);
        } else {
            this.setState(new_state);

            for (var item in data) {
                if (item.endsWith("[]")) {
                    data[item] = JSON.stringify(data[item]);
                }
            }

            if (this.props.submit) {
                this.props.submit(data, this.form_submit_callback, this.form_submit_failure);

                new_state.form_is_saving_right_now = true;
            } else if (this.props.submit_url) {
                ajax_wrapper("POST", this.props.submit_url, data, this.form_submit_callback, this.form_submit_failure);

                new_state.form_is_saving_right_now = true;
            }
        }
    }

    form_submit_callback(value) {
        // Handle standard form submission
        if (this.props.submit_success) {
            this.props.submit_success(value);
        }

        if (this.props.reset_state_on_submit) {
            this.reset_state_on_submit();
        } else {
            this.setState({ form_is_saving_right_now: false });
        }
    }

    form_submit_failure(value) {
        if (this.props.submit_failure) {
            this.props.submit_failure(value);
        }

        this.setState({ form_is_saving_right_now: false });
    }

    check_required_children(required, context) {
        Object.keys(context).forEach((index) => {
            const child = context[index];
            if (is_valid_react_child(child)) {
                const { props } = child;

                if (props.required === true) {
                    if (
                        !(props.name in this.state) ||
                        this.state[props.name] === undefined ||
                        this.state[props.name] === ""
                    ) {
                        let field_name = props.label;
                        // Fallback behavior in case no label was applied to the input
                        if (!field_name || field_name === "") {
                            field_name = props.name;
                        }

                        required.push(`The field ${field_name} must be filled out to submit the form. `);
                    }
                }

                let { children } = child.props;
                if (typeof children !== "undefined") {
                    if (typeof children.length === "undefined") {
                        children = [child.props.children];
                    }
                    required = this.check_required_children(required, children);
                }
            }
        });

        return required;
    }

    handle_key_press(event) {
        if (this.props.submit_on_enter !== false) {
            if (event.key === "Enter") {
                this.form_submit();
            }
        }
    }

    render() {
        let layout = "form " + this.props.className || "";

        const newProps = {
            set_form_state: this.set_form_state,
            handle_change: this.handle_change_event,
            handle_key_press: this.handle_key_press,
        };

        let components = get_all_children(this, newProps, this.state, true);

        if (this.state.form_child_update_key) {
            const new_components = [];
            Object.keys(components).forEach((i) => {
                let component = components[i];
                component = React.cloneElement(component, {
                    key: `${this.state.form_child_update_key}_${i}`,
                });
                new_components.push(component);
            });

            components = new_components;
        }

        let submit_button = null;
        let float;
        if (this.props.submit_url || this.props.submit) {
            let submit_button_type = this.props.submit_button_type || "gradient-success";

            float = { float: "left" };
            let submit_disabled = {};

            // Anti-mash behavior for form.  This will force users to wait until callback functions have completed
            // and ensure the form is submitted properly
            if (this.state.form_is_saving_right_now) {
                submit_disabled = { disabled: "disabled" };
            }

            submit_button = (
                <Button
                    key={"form_submit_button_key"}
                    style={float}
                    onClick={this.form_submit}
                    type={submit_button_type}
                    className={this.props.submit_button_class || ""}
                    {...submit_disabled}
                >
                    {this.props.submit_text || "Save"}
                </Button>
            );
        }

        const failed = [];
        if (this.state.required != []) {
            Object.keys(this.state.required).forEach((i) => {
                failed.push(<Alert type="danger" text={this.state.required[i]} />);
            });
        }

        return (
            <div className={layout} style={this.props.style} onKeyPress={this.handle_key_press}>
                {components}
                {failed}
                {submit_button}
                <div style={{ clear: "both" }} />
            </div>
        );
    }
}

export default FormWithChildren;
