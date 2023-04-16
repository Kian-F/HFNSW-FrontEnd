import React, { useState } from 'react'

import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'

import MainContent from '../MainContent/Columns/Main/Main'

const useForceUpdate = () => {
  let [value, setState] = useState(true)
  return () => setState(!value)
}

const UserForm = ({ user, onFormSubmit }) => {
  const { email, first_name, last_name, mobile } = user || {}

  const [values, setValues] = useState({
    first_name,
    last_name,
    email,
    mobile
  })

  const handleChange = (event) => {
    const { name, value } = event.target || ''
    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    onFormSubmit(values)
  }

  const handleForceUpdateMethod = useForceUpdate()

  return (
    <MainContent>
      <form autoComplete noValidate onSubmit={onSubmit}>
        <Card>
          <CardHeader subheader="The information can be edited" title="Profile" />
          <Divider />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  key={first_name}
                  helperText="Please specify the first name"
                  label="First name"
                  name="first_name"
                  onChange={handleChange}
                  required
                  defaultValue={first_name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  key={last_name}
                  type="text"
                  fullWidth
                  label="Last name"
                  name="last_name"
                  onChange={handleChange}
                  required
                  defaultValue={last_name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  key={email}
                  fullWidth
                  label="Email Address"
                  name="email"
                  required
                  defaultValue={email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  key={mobile}
                  fullWidth
                  label="Phone Number"
                  name="mobile"
                  onChange={handleChange}
                  type="text"
                  defaultValue={mobile}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Country" name="country" required variant="outlined" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                >
                  {/* {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))} */}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button type="submit" onClick={(onFormSubmit, handleForceUpdateMethod)} color="primary" variant="contained">
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    </MainContent>
  )
}

export default UserForm
