import React, { Component } from "react";

import { Form, TextInput, Card, Button } from "library";
import { ajax_wrapper, save_token } from "functions";

// GOOGLE OAUTH USES THIS DOCUMENTATION!!!!
// https://developers.google.com/identity/oauth2/web/guides/use-token-model
const GOOGLE_CLIENT_ID =
  "297720701797-4r7ijvdjgu5e7tf23jto6g4dqm8k23cs.apps.googleusercontent.com";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: null,
      error: "",
    };

    this.signup = this.signup.bind(this);
    this.google_signup = this.google_signup.bind(this);
    this.google_error = this.google_error.bind(this);
    this.signup_callback = this.signup_callback.bind(this);
  }

  componentDidMount() {
    let client = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: "email profile openid",
      callback: (response) => this.google_signup(response),
      error_callback: (response) => this.google_error(response),
    });

    this.setState({ client: client });
  }

  signup(state) {
    let data = {
      name: state["name"],
      email: state["email"],
      password: state["password"],
    };

    ajax_wrapper("POST", "/user/register/", data, this.signup_callback);
  }

  google_signup(state) {
    if (state && state.access_token) {
      ajax_wrapper("POST", "/user/google_login/", state, this.signup_callback);
    }
  }

  google_error(state) {
    console.log("Google Error", state);
  }

  signup_callback(value) {
    if (value.error) {
      window.location.href = "/register";
    } else {
      save_token(value);
      window.location.href = "/home";
    }
  }

  render() {
    let google_button = null;
    if (this.state.client) {
      google_button = (
        <Button
          onClick={() => this.state.client.requestAccessToken()}
          style={{ width: "100%", border: "solid 1px #e9ecef" }}
        >
          <div
            style={{
              marginRight: "10px",
              display: "inline-block",
              lineHeight: "20px",
            }}
          >
            {"Signup with Google"}
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
          <h5>Sign up</h5>
        </div>
        <div style={{ padding: "0 1.5rem" }}>
          {google_button}
          <div className="mt-2 position-relative text-center">
            <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white  px-3">
              or
            </p>
          </div>
        </div>
        <div className="card-body">
          <Form
            submit={this.signup}
            submit_button_type="gradient-info"
            submit_button_class={"w-100 my-4 mb-2"}
            submit_text={"SIGN UP"}
          >
            <TextInput name="name" placeholder="Name" />
            <TextInput name="email" placeholder="Email" />
            <TextInput type="password" name="password" placeholder="Password" />
          </Form>
          <p className="text-sm mt-3 mb-0">
            Already have an account?
            <a className="text-dark font-weight-bolder" href="./login">
              {" "}
              Sign in
            </a>
          </p>
          <br />
        </div>
      </Card>
    );
  }
}
