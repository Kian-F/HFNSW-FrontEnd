import * as React from 'react'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'

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
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="success" variant="buffer" value={progress} valueBuffer={progress + 10} />
      <LinearProgress color="success" variant="buffer" value={progress} valueBuffer={progress + 10} />
      <LinearProgress color="success" variant="buffer" value={progress} valueBuffer={progress + 10} />
    </Stack>
  )
}
