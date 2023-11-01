import logo from './logo.svg';
import React,{useState} from 'react';
import List from './Components/List';
import Form from './Components/Form';
import TodosL from './Components/TodosL';


function App() {
  
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [editTodo,setEditodo]=useState(null);
  
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
        editTodo={editTodo}
        setEditodo={setEditodo}
      />
      </div>
      <di>
        <TodosL todos={todos} setTodos={setTodos} setEditodo={setEditodo}/>
      </di>
     </div>
     </div>
  );
}

export default App;
