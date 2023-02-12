let accessToken = null

export const setAccessToken = async (getAccessTokenSilently) => {
  try {
    accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE
    })
  } catch (error) {
    console.log(error)
  }
}

export const getAccessToken = () => accessToken
