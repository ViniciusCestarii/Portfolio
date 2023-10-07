import { useTheme } from '@/context/themeContext'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Palette from 'mdi-material-ui/Palette'

const ToggleColorButton = () => {
  const { toggleTheme } = useTheme()

  return (
    <Tooltip title={`Change to next theme color`}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          '&.MuiButtonBase-root:hover': {
            bgcolor: 'white',
          },
        }}
        className="bg-white"
      >
        <Palette color="primary" />
      </IconButton>
    </Tooltip>
  )
}

export default ToggleColorButton
