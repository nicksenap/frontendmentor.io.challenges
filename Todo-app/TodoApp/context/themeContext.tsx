import React from 'react';
import {useColorScheme} from 'react-native';

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({children}) {
  const [dark, setDark] = React.useState(false); // Default theme is light
  const isDarkMode = useColorScheme() === 'dark';
  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    setDark(isDarkMode);
  }, [isDarkMode]);

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{theme, dark, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeProvider, ThemeContext};
