import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
            disabled: false,
        };

        this.click = this.click.bind(this);
    }

    click(event) {
        event.preventDefault();

        if (this.props.can_only_be_clicked_once) {
            this.setState({ disabled: true });
        }

        if (this.props.href) {
            if (this.props.target === "_blank") {
                window.open(this.props.href, "_blank");
            } else {
                window.location.href = this.props.href;
            }
        } else if (this.props.onClick) {
            this.props.onClick(event, this.hideModal);
        }
    }

    render() {
        const type = `bg-${this.props.type}`;

        let style = Object.assign({}, this.props.style || {});

        let disabled = {};
        if (this.props.disabled || this.state.disabled) {
            disabled = {
                disabled: "disabled",
            };
        }

        return (
            <button
                className={`btn ${type} ` + (this.props.className || "")}
                onClick={this.click}
                style={style}
                {...disabled}
                type="button"
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
