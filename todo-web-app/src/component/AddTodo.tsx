import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AddTodo = () => {
    const [input, setInput] = useState('')
    return (
        <div className="AddTodo">
            <input type="text" 
                   value={input} 
                   onChange={(e) => setInput(e.target.value)} 
                   placeholder="Create a new todo ..." 
                   style={{height: '100%', width: '100%'}}/>
                   <FontAwesomeIcon icon={faPlus} color={'lightgrey'}/>
        </div>
    )
}