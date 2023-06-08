import { FC, ReactNode, useState, useEffect } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

interface Props {
    children: ReactNode
}

/**
 * A wrapper used to define the theme of the application.
 * @author Martiens Kropff
 * @param { ReactNode } children - The children of the component
 * @returns { JSX.Element } The RThemeProvider component
 */
const RThemeProvider: FC<Props> = ({ children }) => {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  /**
   * Toggles the theme of the application between light and dark.
   * @author Martiens Kropff
   * @returns { Record<string, string> } The theme configuration.
   */
  const toggleTheme = () => {
    setTheme((t) => {
      const newTheme = t === 'light' ? 'dark' : 'light';
      if(newTheme === 'light') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
      } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      }
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default RThemeProvider;