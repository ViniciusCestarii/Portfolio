const yOffset = -100

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const y = element.offsetTop + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
