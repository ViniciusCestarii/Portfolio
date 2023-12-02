import Button, { ButtonProps } from '@mui/material/Button'
import Link from 'next/link'
import HomeIcon from './animatedIcons/HomeIcon'
import { useTheme } from '@mui/material'
import { FC, useState } from 'react'
import ContactIcon from './animatedIcons/ContactIcon'

interface RouterButtonProps extends ButtonProps {
  url: string
  name: string
}

const RouterButton: FC<RouterButtonProps> = ({
  url,
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
    <Button {...props} onMouseEnter={() => setTrigger(!trigger)}>
      <Link
        style={{ display: 'flex', alignItems: 'center', gap: 4 }}
        href={url}
      >
        {Icon && (
          <Icon
            trigger={trigger}
            colorize={theme.palette.primary.main}
            size={28}
          />
        )}
        {name}
      </Link>
    </Button>
  )
}

export default RouterButton
