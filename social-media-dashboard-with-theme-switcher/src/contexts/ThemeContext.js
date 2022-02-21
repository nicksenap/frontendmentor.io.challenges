import React, { createContext } from "react";

export const ThemeContext = createContext({ theme: "dark" });

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
