import { fetchWrapper } from '@functions'

const baseUrl = "http://localhost:3000/users/current"

export const userService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
}

const getAll = () => {
  return fetchWrapper.getAll(baseUrl)
}

const getById = (id) => {
  return fetchWrapper.getAll(`baseUrl/${id}`)
}

const create = (params) => {
  return fetchWrapper.post(baseUrl, params)
}

const update = (params) => {
  return fetchWrapper.put
}