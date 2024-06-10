export const changeScrollbarColor = (color: string) => {
  const root = document.querySelector(':root') as HTMLElement

  if (!root) return

  root.style.setProperty('--scrollbar-color', color)
}
