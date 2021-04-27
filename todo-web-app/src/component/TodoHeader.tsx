 import { AddTodo } from "./AddTodo";
import { ReactComponent as Moon } from "../asset/icon-moon.svg";
export const TodoHeader = () => {
    return (
        <div className="todoHeader">
            <div className="todoHeader__panel">
                <h1>TODO</h1>
                <Moon onClick={() => console.log('moon')}/>
            </div>
            <div className="todoHeader__addTodoContainer">
                <AddTodo />
            </div>
        </div>
  
    )
}