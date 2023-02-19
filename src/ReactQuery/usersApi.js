import axios from 'axios'

// const backEndUrl = 'https://hfnsw-backend.vercel.app/'
const baseURL = 'http://localhost:3000'
const api = axios.create({ baseURL })

export const generateUrl = (id) => {
  return {
    userEditUrl: `/Users/${id}/userDetails`,
    usersUrl: '/Users'
  }
}

export const getUsers = () => api.get('/users').then((res) => res.data)

export const getUser = (userId) => api.get(`/users/${userId}`).then((res) => res.data)

export const updateUser = ({ userId, ...updatedUser }) =>
  api.put(`/users/${userId}`, updatedUser).then((res) => res.data)

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
