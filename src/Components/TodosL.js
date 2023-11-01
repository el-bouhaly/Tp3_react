import React from "react";
import './TodoListe.css';

const TodosL = ({ todos, setTodos,setEditodo })=>{
  const handlecomplete=(todo)=>{
    setTodos(
      todos.map((item)=>{
        if(item.id==todo.id){
          return {...item,completed:!item.completed};
        }
        return item;
      })
    )
  }
const handleDelete=({id})=>{
  setTodos(todos.filter((todo)=>todo.id !==id))
}
const handleEdit=({id})=>{
  const findTodo=todos.find((todo)=>todo.id===id);
  setEditodo(findTodo);
}
  return(
    <div>
      {todos.map((todo)=>(

        <li className="list-item" key={todo.id}>
         <input type="text"  value={todo.title} className={`list ${todo.completed ? "complete" : ""}`}
         onChange={(event)=>event.preventDefault()}
         />
         <div>
          <button className="button-complete task-button" onClick={()=>handlecomplete(todo)}>
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="button-edit task-button" onClick={()=>handleEdit(todo)}>
            <i className="fa fa-edit"></i>
          </button>
          <button className="button-delete task-button" type="button" onClick={()=>handleDelete(todo)}><i className="fa fa-trash"></i>
  
</button>

         </div>
        </li>
      ))}
    </div>
  )
}
export default TodosL;