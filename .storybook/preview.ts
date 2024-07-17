import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// .storybook/preview.js
import { Theme, ThemeProvider, createTheme, responsiveFontSizes, rgbToHex } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* snipped for brevity */

const basicTheme = {
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h3',
          h5: 'h3',
          h6: 'h3',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    contrastThreshold: 4.5,
    primary: {
      main: "#1976d2",
      contrastText: '#EDEDED',
    },
    text: {
      primary: '#EDEDED',
      secondary: '#C4C4CC',
    },
  },
  typography: {
    h1: {
      letterSpacing: '-3px',
      fontWeight: 400,
    },
    h2: {
      letterSpacing: '-1px',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.8rem',
    },
    fontFamily: [
      'var(--font-inter)',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
} as Theme


const theme = responsiveFontSizes(
  createTheme(basicTheme),
)

const lightTheme: Theme = responsiveFontSizes(
  createTheme({
    ...basicTheme, 
    palette: {
      mode: 'light',
      contrastThreshold: 4.5,
      primary: {
        main: "#992210",
        contrastText: '#EDEDED',
      },
      text: {
        primary: '#EDEDED',
        secondary: '#C4C4CC',
      },
    },
    
  }),
)
 
export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: theme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
  }),
];

export default preview;
