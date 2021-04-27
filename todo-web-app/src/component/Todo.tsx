import React from 'react'
import { ReactComponent as Cross } from "../asset/icon-cross.svg";
import { Todo as TodoModel } from "../type";
import {RoundCheckbox  } from "./RoundCheckbox";

interface TodoProps {
    todo: TodoModel;
    index: number
}

export const Todo = (props: TodoProps) => {
    return (
        <div className="todoItem">
            <RoundCheckbox index={props.index}/>
            {/* <input type="checkbox" className="todoItem__checkbox"/> */}
            <p className="todoItem__content">{props.todo.title}</p>
            <Cross onClick={() => console.log('cross')}/>
        </div>
    )
}