import React from 'react'

import { useHistory } from 'react-router-dom'

import { Auth0Provider } from '@auth0/auth0-react'

const Auth0ProviderWithHistory = ({ children }) => {
  const url = '/Account'
  const {
    REACT_APP_AUTH0_CLIENT_ID: clientId,
    REACT_APP_AUTH0_DOMAIN: domain,
    REACT_APP_AUTH0_AUDIENCE: audience
  } = process.env

  const history = useHistory()

  const uri = 'https://localhost:3001'

  const onRedirectCallback = (appState) => {
    history.push(url)
  }

  return (
    <Auth0Provider
      audience={audience}
      domain={domain}
      clientId={clientId}
      redirectUri={uri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
