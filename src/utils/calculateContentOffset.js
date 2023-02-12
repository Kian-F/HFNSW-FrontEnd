import { isLargeScreen } from './mediaQuery'
import isMobileBrowser from 'is-mobile'

const isMobile = isMobileBrowser()

const calculateContentOffset = (suppliedOffset, options = {}) => {
  const { nestedNavigation } = options || {}

  const smallScreen = isMobile
  if (smallScreen) return 0

  const { left } = suppliedOffset
  if (typeof left !== 'undefined') return left

  const largeScreen = isLargeScreen()

  // 70px is the size of the main nav collapsed
  const nestedNavigationOffset = nestedNavigation ? 10 : 0

  const baseOffset = largeScreen ? 0 : 70

  return baseOffset + nestedNavigationOffset
}

export default calculateContentOffset
