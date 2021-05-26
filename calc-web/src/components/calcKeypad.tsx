import React from 'react'
import { CalcKey } from './calcKey';

export const CalcKeypad = () => {
    const littleKeys = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x'];
    const bigKeys = ['RESET', '=']
    return (
        <div className="calc-keypad__container calc-keypad__container--theme-1">
            {littleKeys.map((key) => {
                return <CalcKey value={key} classParam="little-key"/>
            })}
        </div>
    )
}