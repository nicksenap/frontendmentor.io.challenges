import React from 'react';
import './App.css';
import { TodoProvider } from "./context/TodoContext";
import { TodoHeader } from "./component/TodoHeader";
import { Todos } from "./component/Todos";
import { TodoFilter } from "./component/TodoFilter";


function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoHeader/>
        <Todos />
      </div>
    </TodoProvider>

  );
}

export default App;
