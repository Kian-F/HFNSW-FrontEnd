import { useState } from 'react'

import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const useAxios = () => {
  const [response, setResponse] = useState(null) || {}
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async (params) => {
    setLoading(true)
    try {
      const res = await axios.request(params)
      localStorage.setItem('jwt', res.data.jwt)
      setResponse(res.data || {})
      setError(null)
      if (res.status === 'created') {
      }
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    callbacks: {
      fetchData: (params) => fetchData(params)
    },
    response,
    error,
    loading
  }
}

export default useAxios
