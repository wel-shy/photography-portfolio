import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { usePreferencesContext } from '../../contexts/PreferencesContext/PreferencesContext';
import { DarkTheme, LightTheme, Themes } from '../../theme';

interface Props {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: Props) => {
  const { theme } = usePreferencesContext();

  return (
    <ThemeProvider theme={theme === Themes.Light ? LightTheme : DarkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
