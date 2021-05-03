import React, {useContext} from 'react'
import { Todo } from './Todo';
import { ContextType } from "../type";
import { TodoContext } from "../context/TodoContext";
import { TodoFilter } from "../component/TodoFilter";

export const Todos = () => {
    const { todos } = useContext(TodoContext) as ContextType;
    return (
        <div className="todoItemContainer">
            <div className="todos">
                {todos.map((t, index) => <Todo todo={t} key={index} index={index}/>)}
                <div className="todoItemContainer__desc">
                    <p>{todos.filter(t => !t.isChecked).length} items left</p>
                    <div className="">Clear completed</div>
                </div>
            </div>
            <TodoFilter />
        </div>
    )
}