export const FetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
}

const get = async (url) => {
  const requestOptions = {
    method = 'GET',
  }

  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

const post = async (url, body) => {
  const requestOptions = {
    method = 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(body),
  }

  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

const put = (url, body) => {
  const requestOptions = {
    method = 'PUT',
    headers = {'content-Type': 'application/json'},
    body: JSON.stringify(body),
  }

  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

const _delete = async (url) => {
  const requestOptions = {
    method: 'DELETE'
  }

  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

const handleResponse = (response) => {
  return response.text().then(text  => {
    const data = text && JSON.parse(text)

    if(!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}