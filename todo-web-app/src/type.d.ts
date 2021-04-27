export interface Todo {
    id: number;
    title: string;
    isChecked: boolean;
}

export interface ContextType {
    todos: Todo[];
    darkTheme: boolean;
    toggleDarkTheme: () => void;
    saveTodos: (todo: Todo) => void
    updateTodo: (id: number) => void;
}