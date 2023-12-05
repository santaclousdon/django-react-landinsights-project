import React, { Component } from "react";

import { Form, TextInput, Card } from "library";
import { ajax_wrapper, save_token } from "functions";

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

        window.location = "/home";
    }

    render() {
        return (
            <Card>
                <div className="card-header text-center pt-4">
                    <h5>Sign in</h5>
                </div>
                <div className="card-body">
                    <Form
                        submit={this.login}
                        submit_button_type="gradient-info"
                        submit_button_class={"w-100 my-4 mb-2"}
                    >
                        <TextInput name="email" placeholder="Email" />
                        <TextInput name="password" placeholder="Password" />
                    </Form>
                </div>
            </Card>
        );
    }
}
