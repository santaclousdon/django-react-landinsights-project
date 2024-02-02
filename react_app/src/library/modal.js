import React, { Component } from "react";
import { TextInput, Select, Image } from "library";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

var MyAlert = withReactContent(Swal);

MyAlert = MyAlert.mixin({
    customClass: {
        confirmButton: "btn bg-gradient-success",
        cancelButton: "btn bg-gradient-danger",
    },
    buttonsStyling: false,
});

class Modal extends Component {
    static component_name = "EmptyModal";

    constructor(props) {
        super(props);

        this.on_hide = this.on_hide.bind(this);
    }

    componentDidMount() {
        if (this.props.show) {
            MyAlert.fire({
                showCloseButton: true,
                showConfirmButton: false,

                html: <div>{this.props.children}</div>,
                preConfirm: () => {
                    debugger;
                    console.log(MyAlert);
                    return [document.getElementById("input1").value, document.getElementById("input2").value];
                },
            }).then((value) => {
                console.log(value, "value");
            });
        }
    }

    componentWillUnmount() {
        this.on_hide();
    }

    on_hide() {
        if (this.props.on_hide) {
            this.props.on_hide();
        }

        MyAlert.close();
    }

    render() {
        return null;
    }
}

export default Modal;
