export function isLargeScreen() {
  const { innerWidth } = window || {}
  return innerWidth > 768
}

export default isLargeScreen
