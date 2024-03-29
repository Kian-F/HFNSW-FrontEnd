import axios from 'axios'

const productionUrl = 'https://hfnsw-backend.onrender.com'
const developmentUrl = 'http://localhost:3000'

const baseURL = process.env.NODE_ENV === 'development' ? developmentUrl : productionUrl

const api = axios.create({ baseURL })

export const generateUrl = (id) => {
  return {
    userEditUrl: `/Users/${id}/userDetails`,
    usersUrl: '/Users'
  }
}

export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const getUser = (userId) => api.get(`/users/${userId}`).then((res) => res.data)

export const updateUser = ({ userId, ...updatedUser }) =>
  api.put(`/users/${userId}`, updatedUser).then((res) => res.data)

export const deleteUser = async ({ id }) => {
  console.log('id ', id)
  return await api.delete(`/users/${id}`)
}

// export const updateUser = async ({ userId, ...updatedUser }) => {
//   console.log('userId: ', userId)
//   console.log({ ...updatedUser })
//   const response = await fetch(`http://localhost:3000/users/${userId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: updatedUser
//   })

//   if (!response.ok) {
//     throw new Error(response.json().message)
//   }

//   return response.json()
// }
