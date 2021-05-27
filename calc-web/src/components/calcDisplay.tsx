import React from 'react'
import { useAppSelector } from "../app/hooks";
import {
    selectTheme
  } from '../features/theme/themeSlice';
  import {
    selectExpresions, selectResult
  } from '../features/calc/calcSlice';


export const CalcDisplay = () => {
    const theme = useAppSelector(selectTheme);
    const themeClassName = `theme-${theme}`;
    const expresion = useAppSelector(selectExpresions);
    const result = useAppSelector(selectResult);

    let digit: number = 399981
    const formatedNumber = digit.toLocaleString('de-DE'); 
    return (
        <div className={`calc-display__container calc-display__container--${themeClassName}`}>
            <h1>{ expresion }</h1>
        </div>
    );
}