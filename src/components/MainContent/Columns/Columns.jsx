import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const Main = (props) => {
  const { boxProps, children, marginLeft, width } = props
  return (
    <Box
      flexDirection="column"
      marginLeft={marginLeft || [0, 0, 'calc(100% - 375px - 16px']}
      width={width || ['100%', '100%', 'calc(100% - 375px - 16px)']}
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
