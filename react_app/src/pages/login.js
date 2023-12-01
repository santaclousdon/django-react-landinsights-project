import { Wrapper, Form, TextInput, Button } from "library";

// @mui material components
import Card from "@mui/material/Card";

// Images
//import curved9 from "assets/images/curved-images/curved9.jpg";
const curved9 = null;

function Login() {
    return (
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
    );
}

export default Login;
