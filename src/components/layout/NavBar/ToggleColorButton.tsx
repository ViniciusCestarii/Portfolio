import ColorsIcon from '@/components/animatedIcons/ColorsIcon'
import { useMyTheme } from '@/context/themeContext'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const ToggleColorButton = () => {
  const { toggleTheme, themeColor } = useMyTheme()

  return (
    <Tooltip title={`Change to next theme color`}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          '&.MuiButtonBase-root': {
            bgcolor: 'white',
          },
        }}
      >
        <ColorsIcon colorize={themeColor.hex} trigger={themeColor} />
      </IconButton>
    </Tooltip>
  )
}

export default ToggleColorButton
