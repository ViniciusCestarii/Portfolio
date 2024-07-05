'use client'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import {
  Box,
  BoxProps,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface LanguageSelect {
  value: string
  label: string
  src: string
}

const languages: LanguageSelect[] = [
  { value: 'en', label: 'English', src: 'assets/flags/us.svg' },
  { value: 'pt', label: 'Português', src: 'assets/flags/br.svg' },
]

interface ChangeLanguageProps extends DictionaryProps {
  closeFunction?: () => void
}

const ChangeLanguage = ({
  dict,
  closeFunction,
  ...boxProps
}: ChangeLanguageProps & BoxProps) => {
  const router = useRouter()

  const theme = useTheme()

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      {...boxProps}
      sx={{
        height: 304,
        width: 60,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        ...boxProps.sx,
      }}
    >
      <SpeedDial
        direction={isSmall ? 'up' : 'down'}
        ariaLabel={dict.changeLanguage}
        sx={{
          position: 'absolute',
          bottom: 0,
          right: isSmall ? -6 : 0,
          '& .MuiSpeedDial-fab': {
            width: isSmall ? 54 : 48,
            height: isSmall ? 54 : 48,
            background: 'white !important',
            transition:
              'background 0.75s ease-in-out, transform 0.2s ease-in-out !important',
          },
        }}
        icon={
          <SpeedDialIcon
            icon={
              <div>
                <svg
                  color={theme.palette.primary.main}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-a language"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="m8 13 4-7 4 7" />
                  <path d="M9.1 11h5.7" />
                </svg>
              </div>
            }
            openIcon={
              <div>
                <svg
                  color={theme.palette.primary.main}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open-check language"
                >
                  <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
                  <path d="m16 12 2 2 4-4" />
                  <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
                </svg>
              </div>
            }
          />
        }
      >
        {languages.map((action) => (
          <SpeedDialAction
            key={action.value}
            onClick={() => {
              closeFunction && closeFunction()
              router.push(`/${action.value}`, { scroll: false })
            }}
            icon={
              <Image
                src={action.src}
                alt={action.label}
                width={16}
                height={12}
              />
            }
            tooltipOpen
            tooltipPlacement={isSmall ? 'right' : 'left'}
            tooltipTitle={action.label}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default ChangeLanguage
