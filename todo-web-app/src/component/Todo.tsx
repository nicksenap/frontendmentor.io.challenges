import React, { useContext} from 'react'
import { TodoContext } from "../context/TodoContext";
import { ReactComponent as Cross } from "../asset/icon-cross.svg";
import { Todo as TodoModel, ContextType } from "../type";
import { RoundCheckbox  } from "./RoundCheckbox";

interface TodoProps {
    todo: TodoModel;
    index: number
}

export const Todo = (props: TodoProps) => {
    const {index, todo} = props;
    const { updateTodo, removeTodo } = useContext(TodoContext) as ContextType;
    const todoClassName = `todoItem ${todo.isChecked ? 'todoItem--done' : ''}`
    const update = () => {
        updateTodo(todo.id)
    }
    return (
        <div className={todoClassName}>
            <RoundCheckbox index={index} isChecked={todo.isChecked} update={update}/>
            <p className="todoItem__content">{todo.title}</p>
            <Cross onClick={() => removeTodo(todo.id)}/>
        </div>
    )
}