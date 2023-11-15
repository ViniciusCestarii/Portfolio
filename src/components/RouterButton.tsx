import Button, { ButtonProps } from '@mui/material/Button'
import Link from 'next/link'

interface RouterButtonProps extends ButtonProps {
  url: string
  name: string
}

const RouterButton: React.FC<RouterButtonProps> = ({
  url,
  name,
  ...props
}: RouterButtonProps) => {
  return (
    <Button {...props}>
      <Link href={url}>{name}</Link>
    </Button>
  )
}

export default RouterButton
