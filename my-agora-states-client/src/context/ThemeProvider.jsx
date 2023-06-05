import { createContext } from 'react';
import useTheme from 'hooks/useTheme.js';
import { light, dark } from 'styles/theme.js';
import { ThemeProvider as CustomThemeProvider } from 'styled-components';

const defaultTheme = {
  theme: 'light',
  onChangeTheme: () => {},
};

export const ThemeContext = createContext(defaultTheme);

function ThemeProvider({ children }) {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <CustomThemeProvider theme={themeProps.theme === 'light' ? light : dark}>
        {children}
      </CustomThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
