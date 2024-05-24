import { useRef, useState } from 'react'
import './App.css'
import Input_field from './Input_field'
import Todo from './Todo';

function App() {
  
  const [todo_list,set_todo_list] = useState({});
  const [display_completed,set_display_completed] = useState(false);

  //each todo will be saved as an object

  console.log("todo list is ",todo_list);
  console.log("saving in local ..\n");
  
  console.log("display_completed is ",display_completed);
  let first_id = useRef(0);

  const access_id = ()=>{
    return first_id.current;
  };
  const set_id = (value)=>{
    first_id.current = value;
  }

  // saved as todos:
  // {
  //   todo_id: 
  //   todo_text:
  //   todo_status:
  // }
  let fetched_from_local =  localStorage.getItem("todo_list");
  console.log("fetched data is ",fetched_from_local);
  if(fetched_from_local != "[object Object]"){
    console.log("checking .. value from local storage is ",JSON.parse(fetched_from_local));
  };
  return (
  
    <div className="container">
      <Input_field set_id={set_id} access_id={access_id} set_todo_list={set_todo_list} todo_list={todo_list} display_completed={display_completed} set_diplay_completed={set_display_completed}/>

      <div className='todo_display border border-slate-800 p-3'>
        <Todo todo_text={""} todo_id={1}/>
      </div>
      
      
    </div>
    
    
  )
}

export default App
