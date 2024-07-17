import ColorsIcon from '@/components/icons/animated-icons/icons/ColorsIcon'
import { useMyTheme } from '@/context/ThemeContext'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const ToggleColorButton = ({ dict }: DictionaryProps) => {
  const { toggleTheme, themeColor } = useMyTheme()

  return (
    <Tooltip title={dict.color.changeThemeColor}>
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
