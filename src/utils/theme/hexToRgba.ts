const hexToRgba = (hex: string, opacity: number) => {
  hex = hex.replace('#', '')

  // Parse hexadecimal string to get RGB values
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export default hexToRgba
