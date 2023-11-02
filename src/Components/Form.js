
import React,{ useEffect } from 'react';
import './TodoListe.css';
import { v4 as uuidv4 } from 'uuid';
export default function Form( {input,setInput,todos,setTodos,editTodo,setEditodo}) {
  const updateTodo=(title,id,completed)=>{
    const newTodo=todos.map((todo)=> 
    todo.id === id ? {title,id,completed}:todo
  )
  setTodos(newTodo);
  setEditodo("")
  }
  useEffect(()=>{
    if(editTodo){
      setInput(editTodo.title);
    }else{
      setInput("");
    }
  },[setInput,editTodo]);
  const onInputChange=(event)=>{
    setInput(event.target.value);
  };
  const onFormSubmit=(event)=>{
    event.preventDefault();
    if(!editTodo){
      setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
      setInput("")
    }else{
      updateTodo(input,editTodo.id,editTodo.completed)
    }
    
  };
  return (
   <form onSubmit={onFormSubmit}>
    <input type="text" placeholder='Enter a text' className='task-input' 
    value={input}
    required
    onChange={onInputChange}
    />
    <button className='button-add' type='submit'>
    {editTodo ? "Ajoute" : "Ajoute"}
    </button>
   </form>
  )
}
