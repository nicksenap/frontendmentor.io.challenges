import React, {FC} from 'react'
import {
    addExpression, removeExpression, getResult, resetExpression
  } from '../features/calc/calcSlice';
  import { useAppDispatch } from "../app/hooks";

interface CalcKeyProps {
    value: string;
    keySize: string;
    theme: string;
}

export const CalcKey:FC<CalcKeyProps> = ({value, keySize: classParam, theme}) => {
    const dispatch = useAppDispatch();
    const functionKeys = ['DEL', 'RESET']
    const redKeys = ['=']
    const handleClick = (key: string) => {
        switch (key) {
            case 'DEL': {dispatch(removeExpression()); return;}
            case 'RESET': {dispatch(resetExpression()); return;}
            case '=': {dispatch(getResult()); return;}
            default: {dispatch(addExpression(key)); return}
        }
    }
    let keyClassName = `CalcKey CalcKey__${classParam}` ;
    if (functionKeys.includes(value)) {keyClassName += ` CalcKey__${classParam}__function-key--${theme}`}
    else if (redKeys.includes(value)) {keyClassName += ` CalcKey__${classParam}__red-key--${theme}`}
    else {keyClassName += ` CalcKey__${classParam}--${theme}`}
    return (
        <div className={keyClassName} onClick={() => handleClick(value)}>
            {functionKeys.includes(value) ? <h3> {value} </h3> :<h2> {value} </h2> }
        </div>
    );
}