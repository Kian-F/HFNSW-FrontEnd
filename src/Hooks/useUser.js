import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import * as userActions from '../ReactQuery/usersApi'

const updateUser = ({ params }) => {
  const { user, userParams } = params

  const { updateUser: updateFn } = userActions

  const updatedParams = {
    id: user.id,
    ...userParams
  }

  return updateFn(updatedParams)
}

const useUser = () => {
  const baseURL = 'http://localhost:3001'
  const api = axios.create({ baseURL })

  const queryClient = useQueryClient()
  const { deleteUser: deleteFn, getUsers } = userActions
  const { isLoading, isError, error, data: users } = useQuery('users', getUsers)

  const deleteUser = useMutation(deleteFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  return {
    callbacks: {
      // updateUser: (userParams) => updateUser({ user, userParams })
      deleteUser: () => deleteUser()
    }
  }
}

export default useUser
