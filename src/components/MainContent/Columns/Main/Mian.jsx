import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const Main = (props) => {
  const { boxProps, children, marginLeft, marginRight, marginTop, justifyContent, width } = props

  return (
    <Box
      flexDirection="column"
      justifyContent={justifyContent}
      marginRight={marginRight || [0, 0, 'large']}
      marginLeft={marginLeft || [0, 0, 'auto']}
      marginTop={marginTop}
      width={width || ['100%', '100%', 'calc(100% - 250px)']}
      {...boxProps}
    >
      {children}
    </Box>
  )
}

Main.propTypes = {
  boxProps: PropTypes.object,
  children: PropTypes.node,
  marginRight: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
export default Main
