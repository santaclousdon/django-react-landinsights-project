import React, { Component } from "react";

import { Form, TextInput, Card, Button } from "library";
import { ajax_wrapper, save_token } from "functions";
import Swal from "sweetalert2";

// GOOGLE OAUTH USES THIS DOCUMENTATION!!!!
// https://developers.google.com/identity/oauth2/web/guides/use-token-model
const GOOGLE_CLIENT_ID =
  "297720701797-4r7ijvdjgu5e7tf23jto6g4dqm8k23cs.apps.googleusercontent.com";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: null,
      error: "",
      data: {},

      waiting_for_response: false,
    };

    this.login = this.login.bind(this);
    this.google_login = this.google_login.bind(this);
    this.google_error = this.google_error.bind(this);
    this.login_callback = this.login_callback.bind(this);
  }

  componentDidMount() {
    let client = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: "email profile openid",
      callback: (response) => this.google_login(response),
      error_callback: (response) => this.google_error(response),
    });

    this.setState({ client: client });
  }

  login(state) {
    let data = {
      email: state["email"],
      password: state["password"],
    };

    let text = '';
    // Validate for before submitting
    if (!state['email']) {
      text = "Email field is missing";
    }

    else if (!state['password']) {
      text = "Password field is missing";
    }

    if (text) {
      this.fire_swal_error(text);
    }
    else {
      this.setState(
        { waiting_for_response: true, data: data },
        function () {
          ajax_wrapper("POST", "/user/token/", data, this.login_callback);
        }.bind(this)
      );
    }

  }

  google_login(state) {
    console.log(state);

    if (state && state.access_token) {
      console.log("Token Detected");
      ajax_wrapper("POST", "/user/google_login/", state, this.login_callback);
    }
  }

  google_error(state) {
    console.log("Google Error", state);
  }

  login_callback(value) {
    if (value.error) {
      let text = value.error;
      this.fire_swal_error(text);

    } else {
      save_token(value);
      window.location.href = "/home";
    }
  }

  fire_swal_error(text) {
    Swal.fire({
      title: "Warning",
      text: text,
      icon: "error",
      confirmButtonText: "OK",
    }).then(() => this.setState({ waiting_for_response: false }));
  }

  render() {
    let google_button = null;
    if (this.state.client) {
      google_button = (
        <Button
          onClick={() => this.state.client.requestAccessToken()}
          style={{ width: "100%" }}
        >
          <div
            style={{
              marginRight: "10px",
              display: "inline-block",
              lineHeight: "20px",
            }}
          >
            {"Login with Google"}
          </div>
          <img
            style={{
              width: "20px",
              display: "inline-block",
              verticalAlign: "top",
            }}
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
          />
        </Button>
      );
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
            waiting_for_external_response={this.state.waiting_for_response}
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
