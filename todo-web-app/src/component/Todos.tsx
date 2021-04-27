import React, {useContext} from 'react'
import { Todo as TodoModel } from "../type";
import { Todo } from './Todo';
import {  ContextType } from "../type";
import {  TodoContext } from "../context/TodoContext";

export const Todos = () => {
    const { todos, updateTodo } = useContext(TodoContext) as ContextType;
    return (
        <div className="todoItemContainer">
            <div className="todos">
                {todos.map((t, index) => <Todo todo={t} key={index} index={index}/>)}
            </div>
        </div>
    )
}