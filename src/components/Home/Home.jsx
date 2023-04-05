import React from 'react'
import { Box, Button, CssBaseline, Container, Grid, Link } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    alignContent: 'center',
    alignItems: 'center'
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100%',
    minWidth: '1024px',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: 0,
    left: 0
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '70%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  h1: {
    color: 'white',
    textAlign: 'center'
  }
}))

const Home = (props) => {
  const { loggedInStatus } = props

  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Grid className={classes.image}>
        <Container maxWidth="sm">
          <Box sx={{ height: '100vh' }}>
            <h1 className={classes.h1}>
              Hemophilia Foundation <br /> New South Wales
            </h1>
            <h1>Statuses: {loggedInStatus}</h1>
            <Box width={100}>
              <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                {'Log n'}
              </Button>
            </Box>
            <Grid item>
              <Link href="/Registration" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </>
  )
}

export default Home
