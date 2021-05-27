import React from 'react'
import { CalcKey } from './calcKey';
import { useAppSelector } from "../app/hooks";
import {
    selectTheme
  } from '../features/theme/themeSlice';

export const CalcKeypad = () => {
    const theme = useAppSelector(selectTheme);
    const themeClassName = `theme-${theme}`;
    const littleKeys = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x'];
    const largeKeys = ['RESET', '=']
    return (
        <div className={`calc-keypad__container calc-keypad__container--${themeClassName}`}>
            {littleKeys.map((key) => {
                return <CalcKey value={key} keySize="little-key" theme={themeClassName}/>
            })}
            {largeKeys.map((key) => {
                return <CalcKey value={key} keySize="large-key" theme={themeClassName}/>
            })}
        </div>
    )
}