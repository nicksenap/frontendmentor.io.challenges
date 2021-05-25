import React, {FC} from 'react'

interface CalcKeyProps {
    display: string;
    value: string;
}

export const CalcKey:FC<CalcKeyProps> = ({display, value}) => {
    return (
        <div className="CalcKey" onClick={() => console.log(value)}>
            <h1> {display} </h1>
        </div>
    );
}