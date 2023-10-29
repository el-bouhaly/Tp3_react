import React,{ useState } from 'react'

import './TodoListe.css';
import { v4 as uuid4 } from 'uuid';
export default function Form( {input,setInput,todos,setTodos}) {
 
  const onInputChange=(event)=>{
    setInput(event.target.value);
  };
  const onFormSubmit=(event)=>{
    event.preventDefault();
    setTodos([...todos,{id:uuid4(),title:input,completed:false}]);
    setInput("")
  };
  return (
   <form onSubmit={onFormSubmit}>
    <input type="text" placeholder='Enter a text' className='task-input' 
    value={input}
    required
    onChange={onInputChange}
    />
    <button className='button-add' type='submit'>Ajoute</button>
   </form>
  )
}
