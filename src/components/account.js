// import Head from 'next/head'
import React, { useState, useEffect } from 'react'

import { Box, Container, Grid, Typography } from '@mui/material'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import { AccountProfile } from '../components/account/AccountProfile'
import AccountProfileDetails from './account/AccountProfileDetails'
import { DashboardLayout } from './Dashboard/dashboard-layout'

import { getAdminResource } from '../Functions/messageService'

const Account = () => {
  const [user, setUser] = useState('')

  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    let isMounted = true

    const getUser = async () => {
      const accessToken = await getAccessTokenSilently()
      const { data, error } = await getAdminResource(accessToken)
      console.log(data)
      if (!isMounted) {
        return
      }

      if (data) {
        setUser(data)
      }

      if (error) {
        setUser(JSON.stringify(error, null, 2))
      }
    }

    getUser()

    return () => {
      isMounted = false
    }
  }, [getAccessTokenSilently])

  return (
    <>
      {/* <Head>
      <title>Account | Material Kit</title>
    </Head> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails key={user.id} user={user} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default withAuthenticationRequired(Account, {
  //  onRedirecting: () => <Loading />,
})

// export default Account
