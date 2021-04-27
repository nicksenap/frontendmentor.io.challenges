import React, {FC, ReactNode, createContext, useState} from 'react'
import { ContextType, Todo } from "../type";

export const TodoContext = createContext<ContextType | null>(null);
export const TodoProvider: FC<ReactNode> = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 0,
            title: 'Complete online JavaScript course',
            isChecked: true,
          },
          {id: 1, title: 'Jag around the park 3x', isChecked: false},
          {id: 2, title: '10 minutes meditation', isChecked: false},
          {id: 3, title: 'Read for 1 hour', isChecked: false},
          {id: 4, title: 'Pick up groceries', isChecked: false},
          {
            id: 5,
            title: 'Complete Todo App on Frontend Mentor',
            isChecked: false,
          },
    ]);

    const saveTodos = (todo: Todo) => {
        const newTodo: Todo = {
          id: Math.random(), // not really unique - but fine for this example
          title: todo.title,
          isChecked: false
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id: number) => {
        todos.forEach((todo: Todo) => {
          if (todo.id === id) {
            todo.isChecked = true;
            setTodos([...todos]);
          }
        });
      };

      const toggleDarkTheme = () => {
          setDarkTheme(!darkTheme);
      }

    return (
        <TodoContext.Provider value={{ todos, saveTodos, updateTodo, darkTheme, toggleDarkTheme }}>
          {children}
        </TodoContext.Provider>
      );

}