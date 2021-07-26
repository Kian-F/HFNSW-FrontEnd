
import { useState } from 'react';

import { useHistory } from "react-router-dom";

import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

<<<<<<< HEAD

const useAxios = (params) => {
  const history = useHistory()
=======
const useAxios = () => {
>>>>>>> 02e19fb664e0dad77f920647230cb500004207ae
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const res = await axios.request(params);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    callbacks: {
      fetchData: params => fetchData(params),
    },
    response,
    error,
    loading,
  }
};

export default useAxios;