import Button, { ButtonProps } from '@mui/material/Button'
import HomeIcon from './icons/animated-icons/icons/HomeIcon'
import { FC, useState } from 'react'
import ContactIcon from './icons/animated-icons/icons/ContactIcon'
import { scrollToElement } from '@/utils/router/router'

export type RouterButtonElementId = 'home' | 'contact'

interface RouterButtonProps extends ButtonProps {
  elementId: RouterButtonElementId
  name: string
}

const RouterButton: FC<RouterButtonProps> = ({ elementId, name, ...props }) => {
  const [trigger, setTrigger] = useState(false)
  let Icon
  switch (elementId) {
    case 'home':
      Icon = HomeIcon
      break
    case 'contact':
      Icon = ContactIcon
      break
    default:
      Icon = null
  }

  return (
    <Button
      onMouseEnter={() => setTrigger(!trigger)}
      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      onClick={() => scrollToElement(elementId)}
      {...props}
    >
      {Icon && <Icon trigger={trigger} colorize={'white'} size={28} />}
      {name}
    </Button>
  )
}

export default RouterButton
