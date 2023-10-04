import Button from '@mui/material/Button'
import Link from 'next/link'

interface RouterButtonProps {
  url: string
  name: string
  contrastText?: boolean
}

const RouterButton = ({ url, name, contrastText }: RouterButtonProps) => {
  return (
    <Button color={contrastText ? 'inherit' : 'primary'}>
      <Link href={url}>{name}</Link>
    </Button>
  )
}

export default RouterButton
