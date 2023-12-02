import React from "react";

export default function TextInput(props) {
    const style = props.style || {};

    let layout = "";
    if (props.className) {
        layout = props.className;
    }

    const layout_style = {
        position: "relative",
        ...props.layout_style,
    };

    let label = null;
    if (props.label && props.label !== "") {
        label = <label>{props.label}</label>;
    }

    let value = props.default;
    if (props.value) {
        value = props.value;
    }

    let input = (
        <input
            type="text"
            className="form-control"
            name={props.name}
            style={style}
            value={value}
            placeholder={props.placeholder}
            autoComplete={props.autocomplete}
            onChange={props.handle_change}
        />
    );

    let icon = null;
    if (props.right_hand_icon) {
        icon = <div style={{ position: "absolute", top: "0px", right: "0px" }}>{props.right_hand_icon}</div>;
    }

    return (
        <div className={`form-group ${layout}`} style={layout_style}>
            {label}
            {input}
            {icon}
        </div>
    );
}
