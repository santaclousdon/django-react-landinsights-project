import React, { Component } from "react";

import { Form, TextInput } from "library";
import { ajax_wrapper, save_token } from "functions";

// @mui material components
import Card from "@mui/material/Card";

// Images
//import curved9 from "assets/images/curved-images/curved9.jpg";
const curved9 = null;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };

        this.login = this.login.bind(this);
    }

    login(state) {
        let data = {
            email: state["email"],
            password: state["password"],
        };
        ajax_wrapper("POST", "/user/token/", data, this.login_callback);
    }

    login_callback(value) {
        save_token(value);
    }

    render() {
        return (
            <Card>
                <div style={{ textAlign: "center" }}>
                    <h5>Sign in</h5>
                </div>
                <div>
                    <Form submit={this.login}>
                        <TextInput name="email" placeholder="Email" />
                        <TextInput name="password" placeholder="Password" />
                    </Form>
                </div>
            </Card>
        );
    }
}
