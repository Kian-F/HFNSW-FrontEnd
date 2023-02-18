import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'

import * as api from '../../ReactQuery/usersApi'
import MainContent from '../MainContent/Columns/Main/Main'
import UserForm from '../Forms/UserForm'

const UserDetails = () => {
  const { id: userId } = useParams()

  const { data, isLoading } = useQuery(['user', { userId }], () => api.getUser(userId))

  const { mutateAsync, isLoading: isUpdating } = useMutation(api.updateUser)

  const onFormSubmit = async (formData) => {
    await mutateAsync({ ...formData, userId })
  }

  return (
    <MainContent>
      <UserForm key={userId} user={data} onFormSubmit={onFormSubmit}></UserForm>
    </MainContent>
  )
}

export default UserDetails
