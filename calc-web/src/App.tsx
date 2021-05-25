import React from 'react';
import './styles/style.scss'
import { ThemeSwitcher } from "./components/themeSwitcher";
import { useAppSelector } from "./app/hooks";
import {
    selectTheme
  } from './features/theme/themeSlice';

function App() {
  const theme = useAppSelector(selectTheme);
  const themeClassName = `theme-${theme}`;
  return (
    <div className={`App App--${themeClassName}`}>
      <div className="calc-container">
        <div className="calc-header">
        <h1>calc</h1>
        <ThemeSwitcher/>
        </div>
      </div>
    </div>
  );
}

export default App;
