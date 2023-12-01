/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Copied from ./layouts/authentication/sign-in/basic

import { Wrapper, Form, TextInput, Button } from "library";

// @mui material components
import Card from "@mui/material/Card";

// Images
import curved9 from "assets/images/curved-images/curved9.jpg";

function Login() {
    return (
        <Wrapper title="Welcome!" description="Login Here" image={curved9}>
            <Card>
                <div style={{ textAlign: "center" }}>
                    <h5>Sign in</h5>
                </div>
                <div>
                    <Form>
                        <TextInput type="email" placeholder="Email" />
                        <TextInput type="password" placeholder="Password" />
                        <Button type="info" full_width>
                            sign in
                        </Button>
                    </Form>
                </div>
            </Card>
        </Wrapper>
    );
}

export default Login;
