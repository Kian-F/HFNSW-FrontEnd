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
    <Box sx={{ width: '99%', color: 'grey.500', height: '100px' }}>
      <Stack
        sx={{ width: '99%', color: 'grey.500', marginTop: '10px', border: 'solid gray 1px', borderRadius: '5px' }}
        spacing={3}
      >
        <LinearProgress value={progress} valueBuffer={progress} />
        <LinearProgress value={progress} valueBuffer={progress} />
        <LinearProgress value={progress} valueBuffer={progress} />
        <LinearProgress value={progress} valueBuffer={progress} />
      </Stack>
    </Box>
  )
}
