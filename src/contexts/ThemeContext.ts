import { createContext } from 'react';

interface IThemeContext {
    theme: string | null;
    setTheme: React.Dispatch<React.SetStateAction<string>> | null;
    toggleTheme: (() => void) | null;
}

const ThemeContext = createContext<IThemeContext>({
  theme: null,
  setTheme: null,
  toggleTheme: null
});

export default ThemeContext;