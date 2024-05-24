import { useEffect, useRef, useState } from 'react'
import './App.css'
import Input_field from './Input_field'
import Todo from './Todo';

function App() {
  
  const [todo_list,set_todo_list] = useState({});
  const [display_completed,set_display_completed] = useState(false);
  let [first_id,set_first_id] = useState(0);

  //each todo will be saved as an object

  console.log("\n\n------todo list is ",todo_list);
  console.log("display_completed is ",display_completed);
  console.log("first id is : ",first_id);


//$ don;t do anything here
  const access_id = ()=>{
    return first_id;
  };
  //$ don;t do anything here
  const set_id = (value)=>{
    console.log("storing to local fetched_id")
    localStorage.setItem("first_id",JSON.stringify(value));
    set_first_id(value); 
  }
  //todo: development on all use effect hooks here
  useEffect(()=>{
    console.log("rendering for the first time\n");
    let fetched_id = JSON.parse(localStorage.getItem("first_id"));
    console.log("fetched id is ",fetched_id);
    console.log("setting first is\n");
    if(fetched_id != null && fetched_id != undefined){
      set_first_id(fetched_id);
    };
    // set_first_id(fetched_id);

  },[])
  useEffect(() => {
    console.log("rerendering the whole app evrey time\n");
    // let fetched_id = JSON.parse(localStorage.getItem("first_id"));
    // console.log("fetched id is ",fetched_id);
    
  });
  
  useEffect(() => {
    console.log("setting todo list due to change in first_id ")
    let new_obj = JSON.parse(localStorage.getItem("todo_list"));
    if(new_obj!= null && new_obj!= undefined){
      set_todo_list(new_obj);
    };
  }, [first_id])
  ///todo: development stops


  // saved as todos
  // last_id:  new_note_id
// todo_id:   
  // {
  //   todo_id: 
  //   todo_text:
  //   todo_status:
  // }
  //!! does nothing starts... 
  let fetched_from_local =  localStorage.getItem("todo_list");
  console.log("fetched data is ",fetched_from_local);
  if(fetched_from_local != "[object Object]"){
    console.log("in parsed form ",JSON.parse(fetched_from_local));
  };
  
  //!!does nothing ends...

  let final_list_of_todos = Object.values(todo_list); 
  console.log("final_list_of_todos",final_list_of_todos);

  return (
  
    <div className="container bg-red-500">
      <Input_field set_id={set_id} access_id={access_id} set_todo_list={set_todo_list} todo_list={todo_list} display_completed={display_completed} set_diplay_completed={set_display_completed}/>

<div className="todo_container border flex flex-col items-center justify-center gap-2 border-green-500">
      {
        final_list_of_todos.map((todo)=>{
        <div className='border border-gray-400'>
            <Todo/>
          </div>
        })
      }


</div>
      
    </div>
    
    
  )
}

export default App
