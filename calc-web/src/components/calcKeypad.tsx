import React from 'react'
import { CalcKey } from './calcKey';

export const CalcKeypad = () => {
    const littleKeys = ['7', '8', '9', '10', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x'];
    const bigKeys = ['RESET', '=']
    const handleKey = (key: string) => {if(key === 'DEL') {return ''}}
    return (
        <div className="CalcKeypad__container">
            {littleKeys.map((key) => {
                return <CalcKey display={key} value={key} />
            })}
        </div>
    )
}