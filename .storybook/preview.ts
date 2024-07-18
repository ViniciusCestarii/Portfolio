import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { generateMuiThemeByColor } from "../src/context/MuiTheme";
import { themeColors } from "../src/context/ThemeContext";
import ThemeProvider from "../src/context/ThemeContext";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const themes = themeColors.reduce((acc, color) => {
  acc[color.name] = color
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
