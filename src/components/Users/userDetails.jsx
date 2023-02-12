import React, { useRef, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { useForm } from 'react-hook-form'

import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, Input, TextField } from '@mui/material'

import * as api from '../../ReactQuery/usersApi'
import MainContent from '../MainContent/Columns/Main/Mian'
import UserForm from '../Forms/userForm'

const UserDetails = () => {
  const { id: userId } = useParams()

  const { data, isLoading } = useQuery(['user', { userId }], () => api.getUser(userId))

  const { mutate, mutateAsync, isLoading: isUpdating } = useMutation(api.updateUser)

  const onFormSubmit = async (formData) => {
    console.log(formData, userId)
    await mutateAsync({ ...formData, userId })
  }

  return (
    <MainContent>
      <UserForm key={userId} user={data} onFormSubmit={onFormSubmit}></UserForm>
    </MainContent>
  )
}

export default UserDetails
