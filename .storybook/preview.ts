import type { Preview } from "@storybook/react";
import { Theme, ThemeProvider, createTheme, responsiveFontSizes, rgbToHex } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { generateMuiThemeByColor } from "../src/context/MuiTheme";
import { themeColors } from "../src/context/ThemeContext";

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

const themes = themeColors.reduce((acc, color) => {
  acc[color.name] = generateMuiThemeByColor(color.hex);
  return acc;
}, {});
 
export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: 'green',
    Provider: ThemeProvider,
  }),
];

export default preview;
