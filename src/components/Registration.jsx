import React, { useState } from "react";
import * as Components from "./Components";
import "../styles/Registration.css"; // Import CSS for extra styling

const Registration = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create an Account</Components.Title>
          <Components.Input type="text" placeholder="User Name" />
          <Components.Input type="text" placeholder="House No" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input type="text" placeholder="User Name" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="Forgotpassword">Forgot your password?</Components.Anchor>
          <Components.Button>Login</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setSignIn(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello,Residents!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start your journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setSignIn(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default Registration;
