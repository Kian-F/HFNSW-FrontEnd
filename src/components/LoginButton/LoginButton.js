import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      onClick={() => loginWithRedirect()}
    >
      Sign In
    </div>
  );
};

export default LoginButton;