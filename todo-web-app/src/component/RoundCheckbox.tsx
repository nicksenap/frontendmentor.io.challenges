import React, {useState} from 'react'

export interface RoundCheckboxProps {
    index: number
    isChecked: boolean
    update: () => void
}

export const RoundCheckbox = (props: RoundCheckboxProps) => {
    const [checked, setChecked] = useState(props.isChecked)
    const handleClick = () => {
        setChecked(!checked)
        props.update();
    }
    const dynamicId = `checkbox${props.index}`
    return (
        <div className="round">
        <input type="checkbox" id={dynamicId} checked={checked} onChange={handleClick}/>
        <label htmlFor={dynamicId}></label>
    </div> 
    )
}