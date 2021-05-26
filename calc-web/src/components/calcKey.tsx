import React, {FC} from 'react'

interface CalcKeyProps {
    value: string;
    classParam: string;
}

export const CalcKey:FC<CalcKeyProps> = ({value, classParam}) => {
    const keyClassName = `CalcKey CalcKey__${classParam} CalcKey__${classParam}--theme-1`;
    return (
        <div className={keyClassName} onClick={() => console.log(value)}>
            {value === 'DEL' ? <h3> {value} </h3> :<h2> {value} </h2> }
            
        </div>
    );
}