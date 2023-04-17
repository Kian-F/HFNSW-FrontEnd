import * as React from 'react'
import { Box, LinearProgress, Stack } from '@mui/material'

export default function LinearColor() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10))
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '75%', height: '155px', border: 'solid rgba(224, 224, 224, 1) 1px', borderRadius: '5px' }}>
      <Stack
        sx={{ width: '90%', color: 'grey.500', marginTop: '20px', marginBottom: '20px', marginLeft: '45px' }}
        spacing={3}
      >
        <LinearProgress color="inherit" />
        <LinearProgress color="inherit" />
        <LinearProgress color="inherit" />
        <LinearProgress color="inherit" />
        <LinearProgress color="inherit" />
      </Stack>
    </Box>
  )
}
