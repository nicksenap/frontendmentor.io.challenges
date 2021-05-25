import React from 'react'
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
    selectTheme, toggleTheme
  } from '../features/theme/themeSlice';

export const ThemeSwitcher = () => {
    const theme = useAppSelector(selectTheme);
    const themeClassName = `theme-switcher__scroll--theme-${theme}`;
    const dispatch = useAppDispatch();
    const handleClick = () => {dispatch(toggleTheme())};
    return (
        <div className="theme-switcher-container">
              <div className={`theme-switcher-container__label`}>
                <h5>1</h5>
                <h5>2</h5>
                <h5>3</h5>
            </div>
            <div className="theme-switcher" onClick={handleClick}>
                <h5>theme</h5>
                <div className={`theme-switcher__scroll ${themeClassName}`}>
                    <div className="theme-switcher__ball"></div>
                </div>
            </div>
        </div>
    )
}