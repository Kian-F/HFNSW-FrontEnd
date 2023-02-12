import React from 'react'

import { useHistory } from 'react-router-dom'

import LoginButton from '../components/LoginButton/LoginButton'
import LogoutButton from '../components/LogoutButton/LogoutButton'

import { useAuth0 } from '@auth0/auth0-react'

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? <LogoutButton /> : <LoginButton />
}

export default AuthenticationButton
