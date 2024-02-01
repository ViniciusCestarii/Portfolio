import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Menu from 'mdi-material-ui/Menu'

interface MenuButtonProps {
  handleDrawerToggle: () => void
}

const MenuButton = ({ handleDrawerToggle }: MenuButtonProps) => {
  return (
    <Tooltip title={`Open Menu`}>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          '&.MuiButtonBase-root': {
            bgcolor: 'white',
          },
        }}
      >
        <Menu color="primary" />
      </IconButton>
    </Tooltip>
  )
}

export default MenuButton
