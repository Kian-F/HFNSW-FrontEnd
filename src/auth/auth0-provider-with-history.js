import React from "react";

import { useHistory } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";


const Auth0ProviderWithHistory = ({ children }) => {
  const url = '/profile'
  const { REACT_APP_AUTH0_CLIENT_ID : clientId, REACT_APP_AUTH0_DOMAIN: domain} = process.env;

  const history = useHistory();

  const onRedirectCallback = (appState) => {

    history.push(url);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      
      {children}

    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;