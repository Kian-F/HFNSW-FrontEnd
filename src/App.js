import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { createTheme, ThemeProvider, styled, useTheme } from '@mui/material/styles'
import { Box, CssBaseline, Grid, StyledEngineProvider } from '@mui/material'

import { useAuth0 } from '@auth0/auth0-react'
import { setAccessToken } from './Functions/accessToken'

import Account from './components/account'
import RightSideBar from './components/Dashboard/responsiveDrawer.jsx'
import Users from './components/Users/users'
import UserDetails from './components/Users/userDetails'
import Profile from './Views/Profile'
import SignInSide from './components/SignIn/SignInSide'
import MainContent from './components/MainContent/MainContent'

const App = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      setAccessToken(getAccessTokenSilently)
    }
  }, [getAccessTokenSilently, isAuthenticated])

  const theme = useTheme()

  return (
    <>
      {/* <NavBar /> */}
      {/* <StyledEngineProvider injectFirst> */}
      <ThemeProvider theme={theme}>
        {isAuthenticated && <RightSideBar />}
        <MainContent>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/signInSide" component={SignInSide} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id/userDetails" component={UserDetails} />
          </Switch>
        </MainContent>
      </ThemeProvider>
      {/* </StyledEngineProvider> */}
    </>
    // {/* <Footer /> */}
  )
}

export default App
