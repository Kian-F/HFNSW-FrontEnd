import axios from 'axios'

const useUsers = () => {
  const baseURL = 'http://localhost:3001'
  const api = axios.create({ baseURL })

  const getUsers = () => api.get('/users').then((res) => res.data)

  const getUser = (id) => api.get(`/users/${id}`).then((res) => res.data)

  const updateUser = ({ id, ...updatedUser }) => api.put(`/users/${id}`, updatedUser).then((res) => res.data)
}

export default useUsers
