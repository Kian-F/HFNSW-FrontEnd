import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <div
      onClick={() =>
        logout({
          returnTo: window.location.origin
        })
      }
    >
      Sign Out
    </div>
  )
}

export default LogoutButton
