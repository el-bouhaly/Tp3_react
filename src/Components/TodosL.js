import React from "react";
import './TodoListe.css';

const TodosL = ({ todos, setTodos })=>{
const handleDelete=({id})=>{
  setTodos(todos.filter((todo)=>todo.id !==id))
}
  return(
    <div>
      {todos.map((todo)=>(

        <li className="todo-list" key={todo.id}>
         <input type="text"  value={todo.title} className="list"
         onChange={(event)=>event.preventDefault()}
         />
         <div>
          <button className="button-complete task-button" >
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="button-edit task-button">
            <i className="fa fa-edit"></i>
          </button>
          <button className="button-delete " onClick={()=>handleDelete(todo)}>
  <i></i> Supprimer
</button>

         </div>
        </li>
      ))}
    </div>
  )
}
export default TodosL;