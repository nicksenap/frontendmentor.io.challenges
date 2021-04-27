import React from 'react'

export interface RoundCheckboxProps {
    index: number
}

export const RoundCheckbox = (props: RoundCheckboxProps) => {
    const dynamicId = `checkbox${props.index}`
    return (
        <div className="round">
        <input type="checkbox" id={dynamicId} />
        <label htmlFor={dynamicId}></label>
    </div> 
    )
}