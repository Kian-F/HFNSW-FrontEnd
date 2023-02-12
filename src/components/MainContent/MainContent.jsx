import React from 'react'
import PropTypes from 'prop-types'
import calculateContentOffset from '../../utils/calculateContentOffset'
import styles from './styles.css'

const MainContent = (props) => {
  const {
    children,
    nestedNavigation,
    offset,
    offset: { top: topOffset },
    style,
    width
  } = props

  const leftOffset = calculateContentOffset(offset, { nestedNavigation })

  return (
    <div
      className={styles.root}
      style={{
        top: topOffset,
        left: leftOffset,
        width: width || `calc(100% - ${leftOffset || 0}px)`,
        ...style
      }}
    >
      {children}
    </div>
  )
}

MainContent.propTypes = {
  children: PropTypes.node,
  nestedNavigation: PropTypes.bool,
  offset: PropTypes.object,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

MainContent.defaultProps = {
  offset: {}
}

export default MainContent
