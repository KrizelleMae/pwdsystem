import React, { useState } from "react";
import { Modal, ModalOverlay } from "@chakra-ui/react";
import GoogleLogin from "react-google-login";

const clientId =
  "463065432871-c6n0ltb05akftuj1m0metquv49cumha5.apps.googleusercontent.com";
function Glogin(props) {
  const onSuccess = (res) => {
    console.log("Login success:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login failed!: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId="463065432871-c6n0ltb05akftuj1m0metquv49cumha5.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Glogin;
