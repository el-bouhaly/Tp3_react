import logo from './logo.svg';
import React,{useState} from 'react';
import List from './Components/List'
import Form from './Components/Form'
import TodosL from './Components/TodosL'


function App() {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
      <div>
        <List/>
      
      </div>
      <div>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      </div>
      <di>
        <TodosL todos={todos} setTodos={setTodos}/>
      </di>
     </div>
     </div>
  );
}

export default App;
