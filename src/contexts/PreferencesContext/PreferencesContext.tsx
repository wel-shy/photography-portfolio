import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Themes } from '../../theme';

interface PreferencesContextState {
  theme: Themes;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<PreferencesContextState>(
  {} as PreferencesContextState
);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(Themes.Light);

  const toggleTheme = useCallback(() => {
    if (theme === Themes.Dark) {
      setTheme(Themes.Light);

      return;
    }

    setTheme(Themes.Dark);
  }, [theme]);

  const state = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    setTheme(mq.matches ? Themes.Dark : Themes.Light);

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener('change', (evt) =>
      setTheme(evt.matches ? Themes.Dark : Themes.Light)
    );
  }, []);

  return (
    <PreferencesContext.Provider value={state}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferencesContext = () => {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error('Context must be used within a PreferencesProvider');
  }

  return context;
};
