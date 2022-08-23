import { useState } from 'react';
import './App.css';

function App() {
  const [todo,settodo]=useState("")
  const [todos,settodos]=useState([])
  const [editid,seteditid]=useState(0)
  const handleSubmit=(e)=>{
       e.preventDefault()
       if(editid){
        const edittodo=todos.find((t)=>editid==t.id)
        const updatedtodos=todos.map((t)=> t.id===edittodo.id ? (t={id:t.id,todo}):({id:t.id,todo:t.todo}))
        settodos(updatedtodos)
        seteditid(0)
        settodo("")
        return
       }
       if(todo!=='')
       {
        settodos([{id:`${todo}-${Date.now}`,todo},...todos])
        settodo("")
       }
       
  }
  const handledelete=(id)=>{
     const updatedtodos=todos.filter((t)=>t.id!==id)
     settodos(updatedtodos)
  }
  const handleedit=(id)=>
  {     
      const edittodo=todos.find((t)=>t.id===id)
      settodo(edittodo.todo)
      seteditid(id)
  }
  return (
    <div className="App">
     <div className='container'>
      <h1>TODO List App</h1>
      <form className='todoform' onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>settodo(e.target.value)}/>
        <button type="submit" style={editid ? {backgroundColor:'orange'}  :{backgroundColor:'green'}}>{editid ? ("EDIT"):("GO")}</button>
      </form>
      <ul className='alltodos'>
        {
          todos.map((t)=>(
          <li className="Singletodo">
          <span className='todotext' key={t.id}>{t.todo}</span>
          <button className="edit" onClick={()=>handleedit(t.id)}>Edit</button>
          <button className="delete" onClick={()=>handledelete(t.id)}>Delete</button>
        </li>))

        }
        
      </ul>
     </div>
    </div>
  );
}

export default App;
