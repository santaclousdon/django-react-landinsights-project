import React, { Component } from "react";

import { Form, TextInput, Card, Button } from "library";
import { ajax_wrapper, save_token } from "functions";

// GOOGLE OAUTH USES THIS DOCUMENTATION!!!!
// https://developers.google.com/identity/oauth2/web/guides/use-token-model

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: null,
            error: "",
        };

        this.login = this.login.bind(this);
        this.google_login = this.google_login.bind(this);
        this.login_callback = this.login_callback.bind(this);
    }

    componentDidMount() {
        let client = window.google.accounts.oauth2.initTokenClient({
            client_id: '877580727759-84kvf4jrs48mer5ij51hkban3424ghv7.apps.googleusercontent.com',
            scope: 'email profile openid',
            callback: (response) => this.google_login(response)
        });

        this.setState({ client: client });
    }

    login(state) {
        let data = {
            email: state["email"],
            password: state["password"],
        };
        ajax_wrapper("POST", "/user/token/", data, this.login_callback);
    }

    google_login(state) {
        ajax_wrapper("POST", "/user/google_login/", state, this.login_callback);
    }

    login_callback(value) {
        save_token(value);

        window.location = "/home";
    }

    render() {

        let google_button = null;
        if (this.state.client) {
            google_button = <Button onClick={() => this.state.client.requestAccessToken()} style={{ width: '100%' }} >
                <div style={{ marginRight: '10px', display: 'inline-block', lineHeight: '20px' }}>{'Login with Google'}</div>
                <img style={{ width: '20px', display: 'inline-block', verticalAlign: 'top' }} src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' />
            </Button>;
        }

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
                        <TextInput type="password" name="password" placeholder="Password" />
                    </Form>

                    <br />
                    {google_button}
                </div>
            </Card>
        );
    }
}
