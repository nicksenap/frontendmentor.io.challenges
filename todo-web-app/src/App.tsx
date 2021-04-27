import React, {useContext} from 'react';
import './App.css';
import { TodoProvider, TodoContext } from "./context/TodoContext";
import { TodoHeader } from "./component/TodoHeader";
import { Todos } from "./component/Todos";


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
