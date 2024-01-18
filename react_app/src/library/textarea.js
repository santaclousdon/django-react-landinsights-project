import React, { Component } from "react";

export default class TextArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
        };

        this.input_html = React.createRef();
        this.handle_change = this.handle_change.bind(this);
        this.update_height = this.update_height.bind(this);
    }

    componentDidMount() {
        this.update_height();
    }

    componentDidUpdate(prevProps) {
        if (this.props.value != prevProps.value) {
            this.update_height();
        }
    }

    handle_change(value) {
        this.props.handle_change(value);
    }

    update_height() {
        let html = this.input_html.current;
        let height = html.scrollHeight;
        this.setState({ height: height });
    }

    render() {
        const style = this.props.style || {};
        let no_scroll_class = "";
        if (this.props.autosize) {
            style["height"] = `${this.state.height}px`;
            no_scroll_class = "no-scrollbar";
        }

        let layout = "";
        if (this.props.className) {
            layout = this.props.className;
        }

        const layout_style = {
            position: "relative",
            ...this.props.layout_style,
        };

        let label = null;
        if (this.props.label && this.props.label !== "") {
            label = <label>{this.props.label}</label>;
        }

        let value = this.props.default;
        if (this.props.value) {
            value = this.props.value;
        }

        let input = (
            <textarea
                ref={this.input_html}
                className={`form-control ${no_scroll_class}`}
                name={this.props.name}
                style={style}
                value={value}
                placeholder={this.props.placeholder}
                autoComplete={this.props.autocomplete}
                onChange={this.handle_change}
            />
        );

        let icon = null;
        if (this.props.right_hand_icon) {
            icon = <div style={{ position: "absolute", top: "0px", right: "0px" }}>{this.props.right_hand_icon}</div>;
        }

        return (
            <div className={`form-group ${layout}`} style={layout_style}>
                {label}
                {input}
                {icon}
            </div>
        );
    }
}
