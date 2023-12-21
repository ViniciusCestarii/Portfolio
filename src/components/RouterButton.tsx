import Button, { ButtonProps } from '@mui/material/Button'
import HomeIcon from './icons/animated-icons/icons/HomeIcon'
import { useTheme } from '@mui/material'
import { FC, useState } from 'react'
import ContactIcon from './icons/animated-icons/icons/ContactIcon'
import { scrollToElement } from '@/utils/router/router'

interface RouterButtonProps extends ButtonProps {
  elementId: string
  name: string
}

const RouterButton: FC<RouterButtonProps> = ({
  elementId,
  name,
  ...props
}: RouterButtonProps) => {
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)
  let Icon
  switch (name) {
    case 'Home':
      Icon = HomeIcon
      break
    case 'Contact':
      Icon = ContactIcon
      break
    default:
      Icon = null
  }

  return (
    <Button
      {...props}
      onMouseEnter={() => setTrigger(!trigger)}
      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      onClick={() => scrollToElement(elementId)}
    >
      {Icon && (
        <Icon
          trigger={trigger}
          colorize={theme.palette.primary.contrastText}
          size={28}
        />
      )}
      {name}
    </Button>
  )
}

export default RouterButton
