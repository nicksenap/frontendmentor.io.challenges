import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="toggle">
      <div>dark theme</div>
    </div>
  );
};
