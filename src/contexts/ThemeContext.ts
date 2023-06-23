import { MouseEventHandler, createContext } from 'react';

export interface IThemeContext {
    theme: string | null;
    setTheme: React.Dispatch<React.SetStateAction<string>> | null;
    toggleTheme: MouseEventHandler<HTMLButtonElement> | null;
}

const ThemeContext = createContext<IThemeContext>({
  theme: null,
  setTheme: null,
  toggleTheme: null
});

export default ThemeContext;